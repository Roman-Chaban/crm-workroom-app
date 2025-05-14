import React, { type FC } from 'react';

import { Heading, List } from '@/index';

import { boardTasks } from '@/shared/assets/static/BoardTasks';

import styles from './ProjectsBoardTasks.module.scss';

export const BoardTasksItems: FC = () => {
  return (
    <List
      classNames={{
        list: styles['boardTasksItems'],
        listItem: styles['boardTasksItem'],
      }}
      renderItem={(boardItem) => (
        <Heading
          tag="h5"
          key={boardItem.boardId}
          className={styles['boardTasksHeading']}
        >
          {boardItem.title}
        </Heading>
      )}
      renderList={boardTasks}
    />
  );
};
