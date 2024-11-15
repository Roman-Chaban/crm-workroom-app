import { type FC } from 'react';

import { Button } from '@/components/index';

import Image from 'next/image';

import {
  closeIcon,
  modalHeader,
  modalHeaderButton,
  modalHeaderTitle,
} from '@/classNames/home-modal/home-modal';

interface HomeModalHeaderProps {
  onCloseModal: () => void;
}

export const HomeModalHeader: FC<HomeModalHeaderProps> = ({ onCloseModal }) => {
  return (
    <div className={modalHeader}>
      <h3 className={modalHeaderTitle}>Need some Help?</h3>
      <Button
        type="button"
        onClick={onCloseModal}
        className={modalHeaderButton}
      >
        <Image
          src="/icons/outlined-icons/close.svg"
          alt="Close Icon"
          width={24}
          height={24}
          className={closeIcon}
        />
      </Button>
    </div>
  );
};
