import React, { type FC } from 'react';

import { Div, NavView } from '@/index/index';

import { NAV_PATHS } from '@/enums/navPaths';

import styles from '@/components/home/NearestEvents/NearestEvents.module.scss';

export const NearestEvents: FC = () => {
  return (
    <Div className={styles['nearestEvents']}>
      <Div className={styles['nearestEventsContainer']}>
        <NavView
          link={'View all'}
          title={'Nearest Events'}
          href={NAV_PATHS.NEAREST_EVENTS}
        />
      </Div>
    </Div>
  );
};
