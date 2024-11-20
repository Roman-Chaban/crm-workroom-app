import type { FC } from 'react';

import { Input } from '@/components/index';

import {
  input,
  inputContainer,
  inputIcon,
  label,
} from '@/classNames/signIn/signIn';

import { EventType } from '@/types/signIn';

interface SignInFormFieldsProps {
  email: string;
  password: string;
  handleEmailChange: (event: EventType) => void;
  handlePasswordChange: (event: EventType) => void;
}

export const SignInFormFields: FC<SignInFormFieldsProps> = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (
    <>
      <Input
        classNames={{
          input: input,
          container: inputContainer,
          label: label,
        }}
        htmlFor="email"
        id="email"
        label="Email Address"
        name="email"
        type="email"
        placeholder="youremail@gmail.com"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        classNames={{
          input: input,
          container: inputContainer,
          label: label,
          inputIcon: inputIcon,
        }}
        htmlFor="password"
        id="password"
        label="Password"
        name="password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={handlePasswordChange}
        icon="/images/auth/icons/view-password.svg"
      />
    </>
  );
};
