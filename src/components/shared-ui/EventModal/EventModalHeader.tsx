import React, { type FC } from 'react';

import { Div, Heading } from '@/index';

import styles from './EventModal.module.scss';
import { CloseButton } from '../CloseButton/CloseButton';

interface EventModalHeaderProps {
  onCloseModal: () => void;
}

export const EventModalHeader: FC<EventModalHeaderProps> = ({
  onCloseModal,
}) => {
  return (
    <Div className={styles['modalHeader']}>
      <Heading
        tag="h4"
        className={styles['modalHeaderTitle']}
      >
        Add Event
      </Heading>
      <CloseButton
        onCloseModal={onCloseModal}
        classNames={{
          button: styles['modalHeaderClose'],
          icon: styles['modalCloseIcon'],
        }}
      />
    </Div>
  );
};
