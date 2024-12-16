'use client';

import React, { FormEvent, useState, type FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import {
  SignInFormRemember,
  SignInFormSubmit,
  SignInFormFields,
  Div,
  Heading,
} from '@/index/index';

import { EventType, Remember } from '@/types/SignInTypes';
import { IsSubmitting } from '@/types/RegistrationTypes';

import { LoginData } from '@/types/LoginTypes';
import { LoginUser } from '@/api/login';

import { NAV_PATHS } from '@/enums/navPaths';

import { toast, Toaster } from 'react-hot-toast';

import styles from '@/components/auth/SingInForm/SignInForm.module.scss';

export const SignInForm: FC = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
    id: '',
    isAccountVerified: false,
    refreshToken: '',
  });

  const [remember, setRemember] = useState<Remember>(false);

  const [isSubmitting, setIsSubmitting] = useState<IsSubmitting>(false);

  const loginMutation = useMutation({
    mutationFn: () => LoginUser(loginData, { remember: remember ? 1 : 0 }),

    onSuccess: (response) => {
      const userData = {
        id: response.id,
        email: response.email,
        isAccountVerified: response.isAccountVerified,
        refreshToken: response.refreshToken,
      };

      localStorage.setItem('registration', JSON.stringify(userData));

      const storageEvent = new Event('storage');
      window.dispatchEvent(storageEvent);

      toast.success('Login successful!');

      router.push(NAV_PATHS.DASHBOARD);
    },
    onError: (error) => {
      toast.error(error.message || 'Login failed');
    },
  });

  const handleInputChange = (event: EventType) => {
    const { name, value } = event.target;

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleCheckedRemember = () => {
    setRemember((prevRemember) => !prevRemember);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    loginMutation.mutate();
  };

  const isButtonDisabled = !loginData.email || !loginData.password;

  return (
    <>
      <Toaster />
      <Div className={styles['signInFormBlock']}>
        <Div className={styles['signInFormBlockContainer']}>
          <Heading
            tag="h4"
            className={styles['signInFormBlockTitle']}
          >
            Sign In to Workroom
          </Heading>
          <form
            className={styles['signInForm']}
            onSubmit={handleSubmitForm}
          >
            <SignInFormFields
              email={loginData.email}
              password={loginData.password}
              handleInputChange={handleInputChange}
            />

            <SignInFormRemember
              remember={remember}
              handleCheckedRemember={handleCheckedRemember}
            />

            <SignInFormSubmit
              isSubmitting={isSubmitting}
              isButtonDisabled={isButtonDisabled}
            />
          </form>
        </Div>
      </Div>
    </>
  );
};
