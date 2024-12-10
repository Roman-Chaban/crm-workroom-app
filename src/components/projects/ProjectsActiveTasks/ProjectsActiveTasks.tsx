import React, { type FC } from 'react';

import { Container, Heading } from '@/index';

import styles from './ProjectsActiveTasks.module.scss';

export const ProjectsActiveTasks: FC = () => {
  return (
    <Container className={styles['projectsActiveTasks']}>
      <Heading
        tag="h4"
        className={styles['projectsActiveTasksHeading']}
      >
        Active Tasks
      </Heading>
    </Container>
  );
};
