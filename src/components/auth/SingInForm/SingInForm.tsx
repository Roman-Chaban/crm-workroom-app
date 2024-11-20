'use client';

import { FormEvent, useState, type FC } from 'react';

import {
  signFormContainer,
  signInForm,
  signInFormBlock,
  signInFormBlockTitle,
} from '@/classNames/signIn/signIn';

import {
  SignInFormRemember,
  SignInFormSubmit,
  SignInFormFields,
} from '@/components/index/index';

import { ErrorMessage, EventType, Remember } from '@/types/signIn';

import { RegistrationUserData } from '@/types/reg';

import { useMutation } from '@tanstack/react-query';

import { registerUser } from '@/api/registration';
import { useRouter } from 'next/navigation';
import { SidebarNavPaths } from '@/enums/nav-paths';

export const SignInForm: FC = () => {
  const router = useRouter();

  const [registrationData, setRegistrationData] =
    useState<RegistrationUserData>({
      email: '',
      password: '',
      phoneNumber: '',
    });

  const [remember, setRemember] = useState<Remember>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>('');

  const { mutate, isError, error, isSuccess } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      router.push(SidebarNavPaths.DASHBOARD);
    },
    onError: (error: Error) => {
      console.error('Registration failed', error);
      setErrorMessage(error.message || 'An error occurred');
    },
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutate(registrationData);
  };

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
    <div className={signInFormBlock}>
      <div className={signFormContainer}>
        <h4 className={signInFormBlockTitle}>Sign In to Workroom</h4>
        <form className={signInForm} onSubmit={handleSubmit}>
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
