'use client';

import React, { useState, type FC } from 'react';

import { Aside, Container, List } from '@/index';

import Select, { SingleValue } from 'react-select';

import { projectsBoardList } from '@/shared/assets/static/ProjectsBoardList';

import { ListClassNames } from '@/shared/ui/List/List';

import { boardSelectStyles } from '@/shared/styles/selectsStyles/BoardSelectStyles';

import styles from './ProjectsCalendarTasks.module.scss';

const tasksBarListClassNames: ListClassNames = {
  list: styles['projectsTasksBarList'],
  listItem: styles['projectsTasksBarListItem'],
};

interface ProjectsOption {
  value: string;
  label: string;
}

export const ProjectsCalendarBoardBar: FC = () => {
  const [selectedOption, setSelectedOption] = useState<ProjectsOption | null>({
    value: 'All Tasks',
    label: 'All Tasks',
  });

  const handleChangeSelectedOption = (option: SingleValue<ProjectsOption | null>) => {
    setSelectedOption(option);
  };

  return (
    <Aside className={styles['projectsTasksBar']}>
      <Container className={styles['']}>
        <Select
          styles={boardSelectStyles}
          onChange={handleChangeSelectedOption}
          defaultValue={selectedOption}
        />

        <List
          classNames={tasksBarListClassNames}
          renderList={projectsBoardList}
          renderItem={(item) => <>{item.title}</>}
        />
      </Container>
    </Aside>
  );
};
