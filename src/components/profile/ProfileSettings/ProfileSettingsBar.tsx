import React, { type FC } from 'react';

import Image from 'next/image';

import { Aside, Button, Container, List } from '@/index';

import { ProfileBarListClassNames } from '@/interfaces/ProfileBarInterface';

import { profileBarItems } from '@/static/ProfileBar';

import styles from '@/styles/pages/Profile.module.scss';

const settingsBarList: ProfileBarListClassNames = {
  list: styles['profileSettingsBarList'],
  listItem: styles['profileSettingsBarListItem'],
};

export const ProfileSettingsBar: FC = () => {
  return (
    <Aside className={styles['profileSettingsBar']}>
      <Container className={styles['profileSettingsBarContainer']}>
        <List
          classNames={settingsBarList}
          renderList={profileBarItems}
          renderItem={(item) => (
            <Button
              type="button"
              className={styles['profileSettingsBarListItemButton']}
              key={item.id}
            >
              <Image
                src={item.inactiveIcon}
                alt={item.title}
                width={24}
                height={24}
              />
              {item.title}
            </Button>
          )}
        />
      </Container>
    </Aside>
  );
};
