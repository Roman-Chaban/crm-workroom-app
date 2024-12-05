'use client';

import React, { useState, type FC } from 'react';

import Select from 'react-select';

import { Container, Aside, ProjectsSidebarNav } from '@/index/index';

import { ProjectsOption } from '@/interfaces/projects';
import { projectsSelect } from '@/staticData/projectsOptions';

import { selectStyles } from '@/styles/selectsStyles/projectsSelect';

import styles from './ProjectsSidebar.module.scss';

export const ProjectsSidebar: FC = () => {
  const [selectedProjects, setSelectedProjects] = useState<ProjectsOption>(projectsSelect[0]);

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
        <ProjectsSidebarNav />
      </Container>
    </Aside>
  );
};
