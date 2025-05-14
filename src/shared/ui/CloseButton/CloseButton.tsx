import React, { HTMLProps, type FC } from 'react';

import Image from 'next/image';

import { Button } from '@/index';

interface CloseButtonProps extends Omit<HTMLProps<HTMLButtonElement>, ''> {
  onCloseModal: () => void;
  classNames: { button: string; icon: string };
}

export const CloseButton: FC<CloseButtonProps> = ({ onCloseModal, classNames }) => {
  return (
    <Button
      type="button"
      className={classNames.button}
      onClick={onCloseModal}
    >
      <Image
        src="/icons/outlined-icons/close.svg"
        alt="Close Icon"
        width={24}
        height={24}
        className={classNames.icon}
      />
    </Button>
  );
};
