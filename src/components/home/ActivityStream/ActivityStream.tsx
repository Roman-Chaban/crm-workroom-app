import type { FC } from 'react';

import {
  activityStream,
  activityStreamContainer,
  activityStreamTitle,
} from '@/classNames/activity-stream/activity-stream';

export const ActivityStream: FC = () => {
  return (
    <div className={activityStream}>
      <div className={activityStreamContainer}>
        <h2 className={activityStreamTitle}>Activity Stream</h2>
      </div>
    </div>
  );
};
