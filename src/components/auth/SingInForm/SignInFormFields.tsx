'use client';

import React, { useState, type FC } from 'react';

import { Input } from '@/index/index';

import { EventType } from '@/types/signIn';
import { IsPasswordVisible } from '@/types/registration';

import { colors } from '@/constants/colors';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
  const [isPasswordVisible, setIsPasswordVisible] = useState<IsPasswordVisible>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibleState) => !prevVisibleState);
  };

  const changeVisibleIcon = isPasswordVisible ? (
    <VisibilityIcon style={{ color: colors.colorGrayNeutral, cursor: 'pointer' }} />
  ) : (
    <VisibilityOffIcon style={{ color: colors.colorGrayNeutral, cursor: 'pointer' }} />
  );

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
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Create a secure password"
        value={password}
        onChange={handleInputChange}
        onIconClick={togglePasswordVisibility}
        icon={changeVisibleIcon}
      />
    </>
  );
};
