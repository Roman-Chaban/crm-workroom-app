'use client';

import { useState, type FC } from 'react';

import { EventType } from '@/types/signIn';

import { Container, Input } from '@/components/index';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringFormFieldsProps {
  email: string;
  password: string;
  phoneNumber: string;
  handlePhoneNumberChange: (event: EventType) => void;
  handleEmailChange: (event: EventType) => void;
  handlePasswordChange: (event: EventType) => void;
}

export const MultiStepsSignUpEnteringFormFields: FC<
  MultiStepsSignUpEnteringFormFieldsProps
> = ({
  email,
  password,
  phoneNumber,
  handleEmailChange,
  handlePasswordChange,
  handlePhoneNumberChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibleState) => !prevVisibleState);
  };

  return (
    <Container className={styles['containerFields']}>
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
        onChange={handleEmailChange}
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
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="••••••••"
        value={password}
        onChange={handlePasswordChange}
        onIconClick={togglePasswordVisibility}
        icon="/images/auth/icons/view-password.svg"
      />
      <Input
        classNames={{
          input: styles['signInFormBlockInput'],
          container: styles['signInFormBlockInputContainer'],
          label: styles['signInFormBlockLabel'],
        }}
        htmlFor="phoneNumber"
        id="phoneNumber"
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        placeholder="phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </Container>
  );
};
