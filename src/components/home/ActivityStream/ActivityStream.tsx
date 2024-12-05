import React, { type FC } from 'react';

import {
  Box,
  Container,
  Heading,
  UpdatedStream,
  AttachedStream,
  ViewLink,
} from '@/index/index';

import styles from './ActivityStream.module.scss';

export const ActivityStream: FC = () => {
  return (
    <Box className={styles['activityStream']}>
      <Container className={styles['activityStreamContainer']}>
        <Heading
          tag="h2"
          className={styles['activityStreamTitle']}
        >
          Activity Stream
        </Heading>
        <UpdatedStream />
        <AttachedStream />
        <UpdatedStream />
        <ViewLink />
      </Container>
    </Box>
  );
};
