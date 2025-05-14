import React, { type FC } from 'react';

import { Container, Heading } from '@/index';

import { BoardTasksItems } from './BoardTasksItems';

import styles from './ProjectsBoardTasks.module.scss';

export const ProjectsBoardTasks: FC = () => {
  return (
    <Container className={styles['projectsBoardTasks']}>
      <BoardTasksItems />
      <Heading
        tag="h4"
        className={styles['projectsBoardTasksHeading']}
      >
        Active Tasks
      </Heading>
    </Container>
  );
};
