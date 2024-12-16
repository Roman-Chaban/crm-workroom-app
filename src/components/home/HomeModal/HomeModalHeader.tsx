import React, { type FC } from 'react';

import { Div, Heading } from '@/index/index';

import styles from './HomeModal.module.scss';
import { CloseButton } from '@/components/shared-ui/CloseButton/CloseButton';

interface HomeModalHeaderProps {
  onCloseModal: () => void;
}

export const HomeModalHeader: FC<HomeModalHeaderProps> = ({ onCloseModal }) => {
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
