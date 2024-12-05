import React, { type FC } from 'react';

import { NavView } from '@/index/index';

import { NAV_PATHS } from '@/enums/navPaths';

import styles from '@/components/home/NearestEvents/NearestEvents.module.scss';

export const NearestEvents: FC = () => {
  return (
    <div className={styles['nearestEvents']}>
      <div className={styles['nearestEventsContainer']}>
        <NavView
          link={'View all'}
          title={'Nearest Events'}
          href={NAV_PATHS.NEAREST_EVENTS}
        />
      </div>
    </div>
  );
};
