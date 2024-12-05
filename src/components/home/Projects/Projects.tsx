import React, { type FC } from 'react';

import { NavView, ProjectItem } from '@/components/index/index';

import styles from './Projects.module.scss';

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
    <div className={styles['projects']}>
      <div className={styles['projectsContainer']}>
        <NavView
          href=""
          link={'View all'}
          title={'Projects'}
        />
        <ul className={styles['projectsItems']}>
          {projectsItemsList.map((item) => (
            <ProjectItem
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
