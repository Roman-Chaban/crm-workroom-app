import React, { type FC } from 'react';

import { NavView } from '@/components/index/index';

import styles from '@/components/home/NearestEvents/NearestEvents.module.scss';

export const NearestEvents: FC = () => {
  return (
    <div className={styles['nearestEvents']}>
      <div className={styles['nearestEventsContainer']}>
        <NavView
          link={'View all'}
          title={'Nearest Events'}
        />
      </div>
    </div>
  );
};
