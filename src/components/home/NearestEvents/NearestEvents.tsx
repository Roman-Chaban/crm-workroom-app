import type { FC } from 'react';

import { NavView } from '@/components/home/NavView/NavView';

import {
  nearestEvents,
  nearestEventsContainer,
} from '@/classNames/nearest-events/nearest-events';

export const NearestEvents: FC = () => {
  return (
    <div className={nearestEvents}>
      <div className={nearestEventsContainer}>
        <NavView props={{ link: 'View all', title: 'Nearest Events' }} />
      </div>
    </div>
  );
};
