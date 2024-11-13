import type { FC } from 'react';

import { projectItem } from '@/classNames/projects/projects';

interface ProjectItemProps {
  item: { id: number; title: string };
}

export const ProjectItem: FC<ProjectItemProps> = ({ item }) => {
  return (
    <div className={projectItem}>
      <span>{item.title}</span>
    </div>
  );
};
