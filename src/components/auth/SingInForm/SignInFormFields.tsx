import type { FC } from 'react';

import { Input } from '@/components/index';

import { EventType } from '@/types/signIn';

import styles from '@/components/auth/SingInForm/SignInForm.module.scss';

interface SignInFormFieldsProps {
  email: string;
  password: string;
  handleInputChange: (event: EventType) => void;
}

export const SignInFormFields: FC<SignInFormFieldsProps> = ({
  email,
  password,
  handleInputChange,
}) => {
  return (
    <>
      <Input
        classNames={{
          input: styles['signInFormBlockInput'],
          container: styles['signInFormBlockInputContainer'],
          label: styles['signInFormBlockLabel'],
        }}
        htmlFor="email"
        id="email"
        label="Email Address"
        name="email"
        type="email"
        placeholder="youremail@gmail.com"
        value={email}
        onChange={handleInputChange}
      />
      <Input
        classNames={{
          input: styles['signInFormBlockInput'],
          container: styles['signInFormBlockInputContainer'],
          label: styles['signInFormBlockLabel'],
          inputIcon: styles['signInFormBlockViewIcon'],
        }}
        htmlFor="password"
        id="password"
        label="Password"
        name="password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={handleInputChange}
        icon="/images/auth/icons/view-password.svg"
      />
    </>
  );
};
