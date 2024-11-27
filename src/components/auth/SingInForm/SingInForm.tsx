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

import { LoginData } from '@/types/login';
import { LoginUser } from '@/api/login';

import { NavPaths } from '@/enums/nav-paths';

import { toast, ToastContainer } from 'react-toastify';

import styles from '@/components/auth/SingInForm/SignInForm.module.scss';

export const SignInForm: FC = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [remember, setRemember] = useState<Remember>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const loginMutation = useMutation({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.token);

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
    loginMutation.mutate(loginData);
  };

  return (
    <>
      <ToastContainer />
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
            <SignInFormSubmit isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </>
  );
};
