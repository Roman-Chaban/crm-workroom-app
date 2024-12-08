import React, { type FC } from 'react';

import { Button, Div, Heading } from '@/index/index';

import Image from 'next/image';

import styles from './HomeModal.module.scss';

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
      <Button
        type="button"
        onClick={onCloseModal}
        className={styles['modalHeaderButton']}
      >
        <Image
          src="/icons/outlined-icons/close.svg"
          alt="Close Icon"
          width={24}
          height={24}
          className={styles['modalCloseIcon']}
        />
      </Button>
    </Div>
  );
};
