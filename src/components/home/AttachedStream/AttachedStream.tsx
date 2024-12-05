import React, { type FC } from 'react';

import Image from 'next/image';

import styles from './AttachedStream.module.scss';

export const AttachedStream: FC = () => {
  return (
    <div className={styles['attachedStream']}>
      <div className={styles['attachedStreamContainer']}>
        <Image
          src={'/icons/activity-stream-icons/attach-icon.svg'}
          alt="Attach Icon"
          width={24}
          height={24}
          loading="lazy"
          className={styles['attachedStreamIcon']}
        />
        <h4 className={styles['attachedStreamTitle']}>
          Attached files to the task
        </h4>
      </div>
    </div>
  );
};
