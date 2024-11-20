import type { FC } from 'react';

import Image from 'next/image';

import {
  signInBannerLogo,
  singInBanner,
  signInBannerContainer,
  title,
  logo,
  subtitle,
  illustration,
} from '@/classNames/signIn/signIn';

export const SignInBanner: FC = () => {
  return (
    <div className={singInBanner}>
      <div className={signInBannerContainer}>
        <div className={signInBannerLogo}>
          <Image
            src={'/images/auth/icons/signIn-logo.svg'}
            alt="Workroom Logo"
            width={50}
            height={50}
            priority
            className={logo}
          />
          <h3 className={title}>Workroom</h3>
        </div>
        <p className={subtitle}>Your place to work Plan. Create. Control.</p>
        <Image
          src={'/images/auth/signIn-banner.svg'}
          alt="Illustration Image"
          width={500}
          height={373}
          priority
          className={illustration}
        />
      </div>
    </div>
  );
};
