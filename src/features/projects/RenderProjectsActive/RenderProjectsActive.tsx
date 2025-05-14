'use client';

import React, { useState, type FC } from 'react';

import {
  Container,
  ProjectsActiveTasks,
  ProjectsTasksNav,
  ProjectsBoardTasks,
  ProjectsCalendarTasks,
} from '@/index';

import { ActiveTab, TASKS_TABS } from '@/shared/interfaces/TasksNavInterface';

import styles from '@/shared/styles/pages/projects.module.scss';

export const RenderProjectsActive: FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(TASKS_TABS.ACTIVE_TASKS);

  const tabsContent: Record<ActiveTab, JSX.Element> = {
    [TASKS_TABS.ACTIVE_TASKS]: <ProjectsActiveTasks />,
    [TASKS_TABS.BOARD_TASKS]: <ProjectsBoardTasks />,
    [TASKS_TABS.CALENDAR_TASKS]: <ProjectsCalendarTasks />,
  };

  return (
    <Container className={styles['projectsContainer']}>
      <ProjectsTasksNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {tabsContent[activeTab]}
    </Container>
  );
};
