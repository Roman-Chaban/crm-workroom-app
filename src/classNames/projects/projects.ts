import classNames from 'classnames';

import styles from '@/components/home/Projects/Projects.module.scss';

export const containerClassNames = {
  projects: styles['projects'],
  projectsContainer: styles['projectsContainer'],
  projectsItems: styles['projectsItems'],
  projectItem: styles['projectsItem'],
};

export const projects = classNames(containerClassNames.projects);
export const projectsContainer = classNames(
  containerClassNames.projectsContainer
);
export const projectsItems = classNames(containerClassNames.projectsItems);
export const projectItem = classNames(containerClassNames.projectItem);
