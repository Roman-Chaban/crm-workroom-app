import React, { type FC } from 'react';

import { Div, Heading } from '@/index/index';

import { HomeModalProps } from '@/interfaces/HomeModalInterface';

import { CloseButton } from '@/components/shared-ui/CloseButton/CloseButton';

import styles from './HomeModal.module.scss';

export const HomeModalHeader: FC<HomeModalProps> = ({ onCloseModal }) => {
  return (
    <Div className={styles['modalHeader']}>
      <Heading
        tag="h3"
        className={styles['modalHeaderTitle']}
      >
        Need some Help?
      </Heading>
      <CloseButton
        onCloseModal={onCloseModal}
        classNames={{
          button: styles['modalHeaderButton'],
          icon: styles['modalCloseIcon'],
        }}
      />
    </Div>
  );
};
