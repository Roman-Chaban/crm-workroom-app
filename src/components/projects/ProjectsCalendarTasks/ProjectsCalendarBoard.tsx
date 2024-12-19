import React, { type FC } from 'react';

import { Container, Grid } from '@/index';

import { ProjectsCalendarBoardBar } from './ProjectsCalendarBoardBar';
import { ProjectsCalendarBoardHeader } from './ProjectsCalendarBoardHeader';

import styles from './ProjectsCalendarTasks.module.scss';
import { ProjectsCalendarBoardMain } from './ProjectsCalendarBoardMain';

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
