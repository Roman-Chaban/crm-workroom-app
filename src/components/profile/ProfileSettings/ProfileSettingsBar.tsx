'use client';

import React, { useState, type FC } from 'react';

import Image from 'next/image';

import { Aside, Button, Container, List } from '@/index';

import {
  IsActiveItem,
  IsActiveItemClass,
  ProfileBarListClassNames,
} from '@/interfaces/ProfileBarInterface';

import { profileBarItems } from '@/static/ProfileBar';

import classNames from 'classnames';

import styles from '@/styles/pages/Profile.module.scss';

const settingsBarList: ProfileBarListClassNames = {
  list: styles['profileSettingsBarList'],
  listItem: styles['profileSettingsBarListItem'],
};

export const ProfileSettingsBar: FC = () => {
  const [activeListItem, setActiveItem] = useState<IsActiveItem>(2);

  const handleChangeListItem = (id: IsActiveItem) => {
    setActiveItem(id);
  };

  return (
    <Aside className={styles['profileSettingsBar']}>
      <Container className={styles['profileSettingsBarContainer']}>
        <List
          classNames={settingsBarList}
          renderList={profileBarItems}
          renderItem={(item) => {
            const isActiveListItem: IsActiveItemClass =
              activeListItem === item.id;

            return (
              <Button
                type="button"
                className={classNames(
                  styles['profileSettingsBarListItemButton'],
                  {
                    [styles['activeListItem']]: isActiveListItem,
                  },
                )}
                key={item.id}
                onClick={() => handleChangeListItem(item.id)}
              >
                <Image
                  src={isActiveListItem ? item.activeIcon : item.inactiveIcon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
                {item.title}
              </Button>
            );
          }}
        />
      </Container>
    </Aside>
  );
};
