import { ForwardedRef, forwardRef } from 'react';

import Image from 'next/image';

import { Button } from '@/components/index';

import {
  closeIcon,
  modal,
  modalBannerImage,
  modalContainer,
  modalHeader,
  modalHeaderButton,
  modalHeaderParagraph,
  modalHeaderTitle,
} from '@/classNames/home-modal/homeModalClassNames';

interface HomeModalProps {
  onCloseModal: () => void;
}

export const HomeModal = forwardRef<HTMLDivElement, HomeModalProps>(
  ({ onCloseModal }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={modal}>
        <div className={modalContainer} ref={ref}>
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
          <Image
            alt="Modal Illustration"
            src="/images/modal/modal-illustration.svg"
            width={464}
            height={192}
            className={modalBannerImage}
          />
          <p className={modalHeaderParagraph}>
            Describe your question and our specialists will answer you within 24
            hours.
          </p>
        </div>
      </div>
    );
  }
);

HomeModal.displayName = 'HomeModal';
