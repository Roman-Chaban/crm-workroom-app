import React, { type FC } from 'react';

import Image from 'next/image';

import { Div, Heading } from '@/index';

import styles from '@/components/auth/SignInBanner/SignInBanner.module.scss';

export const SignInBanner: FC = () => {
  return (
    <Div className={styles['signInBanner']}>
      <Div className={styles['signInBannerContainer']}>
        <Div className={styles['signInBannerLogo']}>
          <Image
            src={'/images/auth/icons/signIn-logo.svg'}
            alt="Workroom Logo"
            width={50}
            height={50}
            priority
            className={styles['signInBannerLogoIcon']}
          />

          <Heading
            tag="h3"
            className={styles['signInBannerTitle']}
          >
            Workroom
          </Heading>
        </Div>

        <p className={styles['signInBannerSubtitle']}>
          Your place to work Plan. Create. Control.
        </p>

        <Image
          src={'/images/auth/signIn-banner.svg'}
          alt="Illustration Image"
          width={500}
          height={373}
          priority
          className={styles['signInBannerIllustration']}
        />
      </Div>
    </Div>
  );
};
