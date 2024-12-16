'use client';

import React, { HTMLProps, useEffect, useState, type FC } from 'react';
import { createPortal } from 'react-dom';

import { Div, EventModalHeader, EventModalForm } from '@/index';

import { EventModalRepeat } from './EventModalRepeat';

import styles from './EventModal.module.scss';

interface EventModalProps extends HTMLProps<HTMLDivElement> {
  onCloseModal: () => void;
  isOpen: boolean;
}

export const EventModal: FC<EventModalProps> = ({ onCloseModal, isOpen }) => {
  const [eventPortal, setEventPortal] = useState<Element | null>(null);

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      const newModalRoot = document.createElement('div');
      newModalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(newModalRoot);
      setEventPortal(newModalRoot);
    } else {
      setEventPortal(modalRoot);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  if (!eventPortal || !isOpen) return null;

  return createPortal(
    <Div
      className={styles['modalOverlay']}
      onClick={onCloseModal}
    >
      <Div
        className={styles['modalContent']}
        onClick={(event: React.MouseEvent<HTMLDivElement>) =>
          event.stopPropagation()
        }
      >
        <EventModalHeader onCloseModal={onCloseModal} />

        <EventModalForm />

        <EventModalRepeat />
      </Div>
    </Div>,
    eventPortal,
  );
};
