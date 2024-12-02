import React, { type FC } from 'react';

import Image from 'next/image';

import styles from './HomeModal.module.scss';

export const HomeModalIllustration: FC = () => {
  return (
    <>
      <Image
        alt="Modal Illustration"
        src="/images/modal/modal-illustration.svg"
        width={464}
        height={192}
        className={styles['modalBannerImage']}
      />
      <p className={styles['modalHeaderParagraph']}>
        Describe your question and our specialists will answer you within 24 hours.
      </p>
    </>
  );
};
