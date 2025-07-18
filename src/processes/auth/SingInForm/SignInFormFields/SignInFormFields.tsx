'use client';

import React, { useState, type FC } from 'react';

import { Input } from '@/index';

import { IsPasswordVisible } from '@/shared/types/RegistrationTypes';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { COLORS } from '@/shared/constants/Colors';

import { SignInFormFieldsProps } from '@/shared/interfaces/SignInInterface';

import styles from '../SignInForm.module.scss';

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
    <VisibilityIcon style={{ color: COLORS.colorGrayNeutral, cursor: 'pointer' }} />
  ) : (
    <VisibilityOffIcon style={{ color: COLORS.colorGrayNeutral, cursor: 'pointer' }} />
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
