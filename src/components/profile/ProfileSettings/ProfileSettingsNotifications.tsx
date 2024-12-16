import React, { type FC } from 'react';

import { Container } from '@/index';

import styles from '@/styles/pages/Profile.module.scss';

export const ProfileSettingsNotifications: FC = () => {
  return (
    <Container className={styles['profileSettingsNotifications']}>
      Notifications
    </Container>
  );
};
