'use client';

import { useState, type FC } from 'react';

import { useRouter } from 'next/navigation';

import {
  SignInFormRemember,
  SignInFormSubmit,
  SignInFormFields,
} from '@/components/index/index';

import { EventType, Remember } from '@/types/signIn';

import { RegistrationUserData } from '@/types/reg';

import styles from '@/components/auth/SingInForm/SignInForm.module.scss';

export const SignInForm: FC = () => {
  const router = useRouter();

  const [registrationData, setRegistrationData] =
    useState<RegistrationUserData>({
      email: '',
      password: '',
      phoneNumber: '',
    });

  const [remember, setRemember] = useState<Remember>(false);

  const handleEmailChange = (event: EventType) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event: EventType) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      password: event.target.value,
    }));
  };

  const handleCheckedRemember = () => {
    setRemember((prevRemember) => !prevRemember);
  };

  return (
    <div className={styles['signInFormBlock']}>
      <div className={styles['signInFormBlockContainer']}>
        <h4 className={styles['signInFormBlockTitle']}>Sign In to Workroom</h4>
        <form className={styles['signInForm']}>
          <SignInFormFields
            email={registrationData.email}
            password={registrationData.password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
          />
          <SignInFormRemember
            remember={remember}
            handleCheckedRemember={handleCheckedRemember}
          />
          <SignInFormSubmit />
        </form>
      </div>
    </div>
  );
};
