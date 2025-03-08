import React, { type FC } from 'react';

import Image from 'next/image';

import { Box, Div, Heading, List, Span } from '@/index';

import { infoPortalList } from '@/shared/assets/static/InfoPortalList';

import styles from '../InfoPortalMain/InfoPortalMain.module.scss';

export const InfoPortalFolders: FC = () => {
  return (
    <Box role="box">
      <List
        role="list"
        classNames={{
          list: styles['infoPortalList'],
          listItem: styles['infoPortalListItem'],
        }}
        renderItem={(item) => (
          <Div
            role="listInfo"
            className={styles['infoPortalListInfo']}
          >
            <Image
              role="img"
              src={item.icon}
              alt={item.title}
              width={44}
              height={44}
            />
            <Div className={styles['infoPortalListSubInfo']}>
              <Heading
                role="h6"
                tag="h6"
                className={styles['infoPortalListSubInfoTitle']}
              >
                {item.title}
              </Heading>
              <Span className={styles['infoPortalListSubInfoSubtitle']}>
                {item.pagesAmount}
              </Span>
            </Div>
          </Div>
        )}
        renderList={infoPortalList}
      />
    </Box>
  );
};
