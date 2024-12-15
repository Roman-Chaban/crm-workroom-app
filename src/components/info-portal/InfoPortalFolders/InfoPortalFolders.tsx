import React, { type FC } from 'react';

import Image from 'next/image';

import { Box, Div, Heading, List } from '@/index';

import { infoPortalList } from '@/static/InfoPortalList';

import styles from '../InfoPortalMain/InfoPortalMain.module.scss';

export const InfoPortalFolders: FC = () => {
  return (
    <Box>
      <List
        classNames={{
          list: styles['infoPortalList'],
          listItem: styles['infoPortalListItem'],
        }}
        renderItem={(item) => (
          <Div className={styles['infoPortalListInfo']}>
            <Image
              src={item.icon}
              alt={item.title}
              width={44}
              height={44}
            />
            <Div className={styles['infoPortalListSubInfo']}>
              <Heading
                tag="h6"
                className={styles['infoPortalListSubInfoTitle']}
              >
                {item.title}
              </Heading>
              <span className={styles['infoPortalListSubInfoSubtitle']}>
                {item.pagesAmount}
              </span>
            </Div>
          </Div>
        )}
        renderList={infoPortalList}
      />
    </Box>
  );
};
