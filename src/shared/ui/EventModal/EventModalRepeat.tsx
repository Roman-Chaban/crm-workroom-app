import React, { type FC } from 'react';

import { Div, Heading } from '@/index';

import { SwitchButton } from '../SwitchButton/SwitchButton';

import styles from './EventModal.module.scss';

export const EventModalRepeat: FC = () => {
  return (
    <Div className={styles['eventModalRepeat']}>
      <Div className={styles['eventModalRepeatContainer']}>
        <Heading
          tag="h4"
          className={styles['eventModalRepeatTitle']}
        >
          Repeat Event
        </Heading>
        <SwitchButton
          classNames={{
            button: styles['eventModalRepeatSwitchButton'],
            circle: styles['eventModalRepeatCircle'],
            active: styles['active'],
          }}
        />
      </Div>
    </Div>
  );
};
