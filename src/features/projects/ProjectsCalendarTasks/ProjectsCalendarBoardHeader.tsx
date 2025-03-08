import React, { type FC } from 'react';

import { Container, Heading } from '@/index';
import { ProjectsDayList } from './ProjectsDayList';

import styles from './ProjectsCalendarTasks.module.scss';

export const ProjectsCalendarBoardHeader: FC = () => {
  return (
    <Container className={styles['projectsBoardHeader']}>
      <Container className={styles['projectsBoardHeaderContainer']}>
        <Heading
          tag="h5"
          className={styles['projectsBoardHeaderTitle']}
        >
          First month (September)
        </Heading>
        <Container className={styles['projectsBoardHeaderDays']}>
          <ProjectsDayList
            days={31}
            visibleDays={20}
            className={styles['day']}
          />
        </Container>
      </Container>
    </Container>
  );
};
