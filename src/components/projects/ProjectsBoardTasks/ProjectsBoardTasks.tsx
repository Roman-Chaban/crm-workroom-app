import React, { type FC } from 'react';

import { BoardTasksItems } from './BoardTasksItems';
import { Container } from '@/index';

import styles from './ProjectsBoardTasks.module.scss';

export const ProjectsBoardTasks: FC = () => {
  return (
    <Container className={styles['projectsBoardTasks']}>
      <BoardTasksItems />
    </Container>
  );
};
