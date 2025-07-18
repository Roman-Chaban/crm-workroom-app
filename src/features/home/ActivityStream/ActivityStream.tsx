import React, { type FC } from 'react';

import { Box, Container, Heading, UpdatedStream, AttachedStream, ViewLink } from '@/index';

import styles from './ActivityStream.module.scss';

export const ActivityStream: FC = () => {
  return (
    <Box
      isStyles
      className={styles['activityStream']}
    >
      <Container className={styles['activityStreamContainer']}>
        <Heading
          tag="h2"
          className={styles['activityStreamTitle']}
        >
          Activity Stream
        </Heading>

        <Container className={styles['activityStreamPrimary']}>
          <UpdatedStream />
          <AttachedStream />
        </Container>

        <Container className={styles['activityStreamSecondary']}>
          <UpdatedStream />
          <ViewLink />
        </Container>
      </Container>
    </Box>
  );
};
