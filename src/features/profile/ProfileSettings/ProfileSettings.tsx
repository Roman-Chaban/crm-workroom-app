import React, { type FC } from 'react';

import Image from 'next/image';

import { Box, Button, Container, ProfileSettingsBar, ProfileSettingsNotifications } from '@/index';

import styles from '@/shared/styles/pages/Profile.module.scss';

export const ProfileSettings: FC = () => {
  return (
    <Container className={styles['profileSettings']}>
      <Button
        type="button"
        className={styles['profileSettingsButton']}
      >
        <Image
          src={'/icons/outlined-icons/arrow-back.svg'}
          alt="Back Icon"
          width={24}
          height={24}
        />
        Settings
      </Button>
      <Box>
        <ProfileSettingsBar />
        <ProfileSettingsNotifications />
      </Box>
    </Container>
  );
};
