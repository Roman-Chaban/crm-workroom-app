import React, { type FC } from 'react';

import Image from 'next/image';

import { Div, Heading } from '@/index';

import styles from './UpdatedStream.module.scss';

export const UpdatedStream: FC = () => {
  return (
    <Div className={styles['updatedStream']}>
      <Div className={styles['updatedStreamContainer']}>
        <Image
          src={'/icons/activity-stream-icons/upload-icon.svg'}
          alt="Upload Icon"
          width={24}
          height={24}
          className={styles['updatedStreamIcon']}
          loading="lazy"
        />

        <Heading
          tag="h4"
          className={styles['updatedStreamTitle']}
        >
          Updated the status of Mind Map task to In Progress
        </Heading>
      </Div>
    </Div>
  );
};
