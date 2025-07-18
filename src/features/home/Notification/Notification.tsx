'use client';

import React, { useEffect, useState, type FC } from 'react';

import Image from 'next/image';

import { Box, Button, Container, Heading } from '@/index';
import { NotificationsProps } from '@/shared/interfaces/NotificationInterface';

import styles from './Notification.module.scss';

type AnimationState = 'entering' | 'exiting' | 'none';

export const Notifications: FC<NotificationsProps> = ({ onCloseNotifications, isOpen }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>('none');

  useEffect(() => {
    if (isOpen) {
      setAnimationState('entering');
      setShowNotification(true);
    } else {
      setAnimationState('exiting');
    }
  }, [isOpen]);

  const handleTransitionEnd: React.TransitionEventHandler<HTMLDivElement> = (event) => {
    if (event.propertyName === 'transform' && animationState === 'exiting') {
      setShowNotification(false);
    }
  };

  if (!isOpen && !showNotification) return null;

  return (
    <Container className={styles.notifications}>
      <Box
        className={`${styles.notificationsContainer} ${styles[animationState]}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <Container className={styles.notificationsHeader}>
          <Heading
            className={styles.title}
            tag="h4"
          >
            Notifications
          </Heading>
          <Button
            type="button"
            className={styles.closeButton}
            onClick={onCloseNotifications}
          >
            <Image
              src="/icons/outlined-icons/close.svg"
              alt="Close Icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </Button>
        </Container>
      </Box>
    </Container>
  );
};
