import type { FC } from 'react';

import Link from 'next/link';

import { Button, Input } from '@/components/index';

import {
  forgotPassword,
  rememberBlock,
  rememberCheckbox,
  rememberContainer,
  rememberLabel,
} from '@/classNames/signIn/signIn';

interface SignInFormRememberProps {
  remember: boolean;
  handleCheckedRemember: () => void;
}

export const SignInFormRemember: FC<SignInFormRememberProps> = ({
  remember,
  handleCheckedRemember,
}) => {
  return (
    <div className={rememberBlock}>
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
          input: rememberCheckbox,
          container: rememberContainer,
          label: rememberLabel,
        }}
      />
      <Button type="button" className={forgotPassword}>
        <Link href={''}>Forgot Password?</Link>
      </Button>
    </div>
  );
};
