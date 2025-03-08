import React, { type FC } from 'react';

import Image from 'next/image';

import { Div, Heading } from '@/index';

import styles from './AttachedStream.module.scss';

export const AttachedStream: FC = () => {
  return (
    <Div className={styles['attachedStream']}>
      <Div className={styles['attachedStreamContainer']}>
        <Image
          src={'/icons/activity-stream-icons/attach-icon.svg'}
          alt="Attach Icon"
          width={24}
          height={24}
          loading="lazy"
          className={styles['attachedStreamIcon']}
        />
        <Heading
          tag="h4"
          className={styles['attachedStreamTitle']}
        >
          Attached files to the task
        </Heading>
      </Div>
    </Div>
  );
};
