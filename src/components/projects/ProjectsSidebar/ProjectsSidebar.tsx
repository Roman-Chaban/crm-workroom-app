'use client';

import React, { useState, type FC } from 'react';

import Select from 'react-select';

import { Container, Aside, ProjectsSidebarNav } from '@/index/index';

import { ProjectsOption } from '@/interfaces/ProjectsInterface';

import { selectStyles } from '@/styles/selectsStyles/SelectStyles';

import { projectsSelect } from '@/staticData/projectsOptions';

import styles from './ProjectsSidebar.module.scss';

export const ProjectsSidebar: FC = () => {
  const [selectedProjects, setSelectedProjects] = useState<ProjectsOption>(
    projectsSelect[0],
  );

  const [activeListItem, setActiveListItem] = useState<number>(1);

  const handleSelectProjectsOption = (option: ProjectsOption | null) => {
    if (option) {
      setSelectedProjects(option);
    }
  };

  return (
    <Aside className={styles['projectsSidebar']}>
      <Container className={styles['projectsSidebarContainer']}>
        <Select
          className={styles['projectsSidebarSelect']}
          value={selectedProjects}
          options={projectsSelect}
          onChange={handleSelectProjectsOption}
          styles={selectStyles}
          instanceId="projects-select"
        />
        <ProjectsSidebarNav
          activeListItem={activeListItem}
          setActiveListItem={setActiveListItem}
        />
      </Container>
    </Aside>
  );
};
