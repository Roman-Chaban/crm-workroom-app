import React, { type FC } from 'react';

import Link from 'next/link';

import { Button, Div, Input } from '@/index';

import { SignInFormRememberProps } from '@/shared/interfaces/SignInInterface';

import styles from '../SignInForm.module.scss';

export const SignInFormRemember: FC<SignInFormRememberProps> = ({
  remember,
  handleCheckedRemember,
}) => {
  return (
    <Div className={styles['signInFormBlockRemember']}>
      <Input
        htmlFor="remember"
        type="checkbox"
        label="Remember me"
        id="remember"
        value=""
        checked={remember}
        onChange={handleCheckedRemember}
        name="remember"
        classNames={{
          input: styles['signInFormBlockRememberCheckbox'],
          container: styles['signInFormBlockRememberContainer'],
          label: styles['signInFormBlockRememberLabel'],
        }}
      />

      <Button
        type="button"
        className={styles['signInFormBlockForgotButton']}
      >
        <Link href={''}>Forgot Password?</Link>
      </Button>
    </Div>
  );
};
