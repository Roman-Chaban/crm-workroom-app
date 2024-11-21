import type { FC } from 'react';

interface ProjectItemProps {
  item: { id: number; title: string };
}

import styles from './Projects.module.scss';

export const ProjectItem: FC<ProjectItemProps> = ({ item }) => {
  return (
    <div className={styles['projectsItem']}>
      <span>{item.title}</span>
    </div>
  );
};
