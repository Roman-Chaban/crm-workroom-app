import { FC } from 'react';

import Image from 'next/image';

import {
  modalBannerImage,
  modalHeaderParagraph,
} from '@/classNames/home-modal/home-modal';

export const HomeModalIllustration: FC = () => {
  return (
    <>
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
    </>
  );
};
