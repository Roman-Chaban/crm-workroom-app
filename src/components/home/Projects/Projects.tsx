import type { FC } from 'react';

import {
  projects,
  projectsContainer,
  projectsItems,
} from '@/classNames/projects/projects';

import { NavView, ProjectItem } from '@/components/index/index';

export const Projects: FC = () => {
  const projectsItemsList: Array<{ id: number; title: string }> = [
    {
      id: 1,
      title: 'Project 1',
    },
    {
      id: 2,
      title: 'Project 2',
    },
    {
      id: 3,
      title: 'Project 3',
    },
  ];
  return (
    <div className={projects}>
      <div className={projectsContainer}>
        <NavView props={{ link: 'View all', title: 'Projects' }} />
        <ul className={projectsItems}>
          {projectsItemsList.map((item) => (
            <ProjectItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
