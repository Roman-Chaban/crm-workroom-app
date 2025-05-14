import React, { type FC } from 'react';

import {
  Container,
  Grid,
  ProjectsCalendarBoardBar,
  ProjectsCalendarBoardHeader,
  ProjectsCalendarBoardMain,
} from '@/index';

import styles from './ProjectsCalendarTasks.module.scss';

export const ProjectsCalendarBoard: FC = () => {
  return (
    <Grid className={styles['projectsTasksBoard']}>
      <ProjectsCalendarBoardBar />
      <Container className={styles['projectsTasksBoardContainer']}>
        <ProjectsCalendarBoardHeader />
        <ProjectsCalendarBoardMain />
      </Container>
    </Grid>
  );
};
