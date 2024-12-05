import React, { type FC } from 'react';

import { Container } from '@/index/index';

import { projectsNavList } from '@/staticData/projectsNav';

import styles from './ProjectsSidebarNav.module.scss';

export const ProjectsSidebarNav: FC = () => {
  return (
    <nav className={styles['sidebar']}>
      <Container className={styles['sidebarContainer']}>
        <ul className={styles['sidebarList']}>
          {projectsNavList.map((listItem) => (
            <li
              key={listItem.id}
              className={styles['sidebarListItem']}
            >
              <span className={styles['sidebarListItemCode']}>{listItem.code}</span>
              {listItem.title}
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
