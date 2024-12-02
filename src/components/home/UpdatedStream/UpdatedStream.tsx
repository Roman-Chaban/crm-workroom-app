import React, { type FC } from 'react';

import Image from 'next/image';

import styles from './UpdatedStream.module.scss';

export const UpdatedStream: FC = () => {
  return (
    <div className={styles['updatedStream']}>
      <div className={styles['updatedStreamContainer']}>
        <Image
          src={'/icons/activity-stream-icons/upload-icon.svg'}
          alt="Upload Icon"
          width={24}
          height={24}
          className={styles['updatedStreamIcon']}
          loading="lazy"
        />

        <h4 className={styles['updatedStreamTitle']}>
          Updated the status of Mind Map task to In Progress
        </h4>
      </div>
    </div>
  );
};
