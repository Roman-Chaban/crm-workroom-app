import React, { type FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Button, Div } from '@/index';

import { NAV_PATHS } from '@/shared/enums/navPaths';

import { SignInFormSubmitProps } from '@/shared/interfaces/SignInInterface';

import styles from '../SignInForm.module.scss';

export const SignInFormSubmit: FC<SignInFormSubmitProps> = ({ isSubmitting, isButtonDisabled }) => {
  return (
    <Div className={styles['signInFormBlockSubmit']}>
      <Button
        type="submit"
        className={styles['signInFormBlockButton']}
        disabled={isButtonDisabled}
      >
        {isSubmitting ? 'Logging in...' : 'Log In'}

        <Image
          src={'/images/auth/icons/arrow-right.svg'}
          alt="Arrow Right Icon"
          width={24}
          height={24}
          priority
        />
      </Button>

      <Button
        type="button"
        className={styles['signInFormBlockAccount']}
      >
        <Link href={NAV_PATHS.MULTI_STEP_SIGN_IN}>Don’t have an account?</Link>
      </Button>
    </Div>
  );
};
