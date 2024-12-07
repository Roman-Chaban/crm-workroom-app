import React, { Dispatch, SetStateAction, type FC } from 'react';

import Image from 'next/image';

import { Button, Container } from '@/index/index';

import { projectsNavList } from '@/staticData/projectsNav';

import styles from './ProjectsSidebarNav.module.scss';

interface ProjectsSidebarNavProps {
  activeListItem: number;
  setActiveListItem: Dispatch<SetStateAction<number>>;
}

export const ProjectsSidebarNav: FC<ProjectsSidebarNavProps> = ({
  activeListItem,
  setActiveListItem,
}) => {
  return (
    <nav className={styles['sidebar']}>
      <Container className={styles['sidebarContainer']}>
        <ul className={styles['sidebarList']}>
          {projectsNavList.map((listItem) => {
            const isActiveListItem = activeListItem === listItem.id;
            return (
              <li
                key={listItem.id}
                className={`${styles['sidebarListItem']} ${isActiveListItem ? styles['activeListItem'] : ''}`}
                onClick={() => setActiveListItem(listItem.id)}
              >
                <span className={styles['sidebarListItemCode']}>
                  {listItem.code}
                </span>
                {listItem.title}
                {isActiveListItem && (
                  <Button
                    type="button"
                    className={styles['viewDetailsButton']}
                  >
                    View details{' '}
                    <Image
                      src={'/icons/projects-icons/arrow-right.svg'}
                      alt="Arrow Icon"
                      width={24}
                      height={24}
                    />
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};
