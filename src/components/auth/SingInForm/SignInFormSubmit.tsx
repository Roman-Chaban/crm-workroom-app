import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/index';

import styles from '@/components/auth/SingInForm/SignInForm.module.scss';

export const SignInFormSubmit: FC = () => {
  return (
    <div className={styles['signInFormBlockSubmit']}>
      <Button type="button" className={styles['signInFormBlockButton']}>
        Sign In
        <Image
          src={'/images/auth/icons/arrow-right.svg'}
          alt="Arrow Right Icon"
          width={24}
          height={24}
          priority
        />
      </Button>
      <Button type="button" className={styles['signInFormBlockAccount']}>
        <Link href={''}>Don’t have an account?</Link>
      </Button>
    </div>
  );
};
