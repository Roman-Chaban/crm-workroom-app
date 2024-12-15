import React, { type FC } from 'react';

import Image from 'next/image';

import { Button, Container, Heading, List } from '@/index';

import { ActiveTab } from '@/interfaces/TasksNavInterface';

import { tasksNavButtons } from '@/staticData/tasksNav';

import styles from './ProjectsTasksNav.module.scss';

interface ProjectsTasksNavProps {
  activeTab: ActiveTab;
  setActiveTab: (activeTab: ActiveTab) => void;
}

export const ProjectsTasksNav: FC<ProjectsTasksNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const handleChangeActiveTab = (buttonId: number) => {
    setActiveTab(buttonId);
  };

  return (
    <nav className={styles['tasksNav']}>
      <Container className={styles['tasksNavContainer']}>
        <Heading
          tag="h3"
          className={styles['tasksNavTitle']}
        >
          Tasks
        </Heading>
        <List
          classNames={{
            list: styles['tasksNavList'],
            listItem: styles['tasksNavListItem'],
          }}
          renderList={tasksNavButtons}
          renderItem={(button) => {
            const isActiveNavButton = activeTab === button.id;
            return (
              <Button
                type="button"
                className={`${styles['tasksNavListButton']} ${
                  isActiveNavButton ? styles['active'] : ''
                }`}
                onClick={() => handleChangeActiveTab(button.id)}
              >
                <Image
                  src={isActiveNavButton ? button.activeIcon : button.icon}
                  alt={button.alternativeText}
                  width={24}
                  height={24}
                  priority
                />
              </Button>
            );
          }}
        />
        <Button
          type="button"
          className={styles['tasksNavNotificationsButton']}
        >
          <Image
            src={'/icons/tasks-nav-icons/notifications.svg'}
            alt="Notification Icon"
            width={24}
            height={24}
            priority
          />
        </Button>
      </Container>
    </nav>
  );
};
