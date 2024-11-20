import type { FC } from 'react';

import Link from 'next/link';

import { Button } from '@/components/index';

import {
  signInAccount,
  signInButton,
  signInSubmit,
} from '@/classNames/signIn/signIn';
import Image from 'next/image';

export const SignInFormSubmit: FC = () => {
  return (
    <div className={signInSubmit}>
      <Button type="button" className={signInButton}>
        Sign In
        <Image
          src={'/images/auth/icons/arrow-right.svg'}
          alt="Arrow Right Icon"
          width={24}
          height={24}
          priority
        />
      </Button>
      <Button type="button" className={signInAccount}>
        <Link href={''}>Don’t have an account?</Link>
      </Button>
    </div>
  );
};
