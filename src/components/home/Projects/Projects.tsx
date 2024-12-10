import React, { type FC } from 'react';

import { Div, List, NavView, ProjectItem } from '@/index/index';

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
    <Div className={styles['projects']}>
      <Div className={styles['projectsContainer']}>
        <NavView
          href=""
          link={'View all'}
          title={'Projects'}
        />

        <List
          classNames={{ list: styles['projectsItems'], listItem: '' }}
          renderList={projectsItemsList}
          renderItem={(item) => (
            <ProjectItem
              key={item.id}
              item={item}
            />
          )}
        />
      </Div>
    </Div>
  );
};
