import React, { type FC } from 'react';

import styles from './ActivityStream.module.scss';

export const ActivityStream: FC = () => {
  return (
    <div className={styles['activityStream']}>
      <div className={styles['activityStreamContainer']}>
        <h2 className={styles['activityStreamTitle']}>Activity Stream</h2>
      </div>
    </div>
  );
};
