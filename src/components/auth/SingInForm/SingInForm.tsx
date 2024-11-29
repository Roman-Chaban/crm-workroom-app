'use client';

import { FormEvent, useState, type FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import {
  SignInFormRemember,
  SignInFormSubmit,
  SignInFormFields,
} from '@/components/index/index';

import { EventType, Remember } from '@/types/signIn';
import { IsSubmitting } from '@/types/registration';

import { LoginData } from '@/types/login';
import { LoginUser } from '@/api/login';

import { NavPaths } from '@/enums/navPaths';

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

      router.push(NavPaths.DASHBOARD);
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
      <div className={styles['signInFormBlock']}>
        <div className={styles['signInFormBlockContainer']}>
          <h4 className={styles['signInFormBlockTitle']}>
            Sign In to Workroom
          </h4>
          <form className={styles['signInForm']} onSubmit={handleSubmitForm}>
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
        </div>
      </div>
    </>
  );
};
