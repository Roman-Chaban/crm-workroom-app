import React, { type FC } from 'react';

import { Div } from '@/index';

import styles from './Projects.module.scss';

interface ProjectItemProps {
  item: { id: number; title: string };
}

export const ProjectItem: FC<ProjectItemProps> = ({ item }) => {
  return (
    <Div className={styles['projectsItem']}>
      <span>{item.title}</span>
    </Div>
  );
};
