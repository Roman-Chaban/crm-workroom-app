'use client';

import { FormEvent, useState, type FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import { Container, Section } from '@/components/index';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MultiStepsSignUpEnteringForm } from './MultiStepsSignUpEnteringForm';

import { RegistrationUserData } from '@/types/reg';

import { EventType } from '@/types/signIn';

import { registerUser } from '@/api/registration';

import styles from './MultiStepsSignUpEntering.module.scss';

export const MultiStepSignUpEntering: FC = () => {
  const [registrationData, setRegistrationData] =
    useState<RegistrationUserData>({
      email: '',
      password: '',
      phoneNumber: '',
    });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success('Registration successful!');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Registration failed');
    },
  });

  const handleRegistrationDataChange = (event: EventType) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (!registrationData.email || !registrationData.password) {
      toast.error('Please fill in all fields!');
      return;
    }
    mutation.mutate(registrationData);
  };

  return (
    <>
      <ToastContainer />
      <Section className={styles['multiSteps']}>
        <Container className={styles['multiStepsContainer']}>
          <MultiStepsSignUpEnteringForm
            registrationData={registrationData}
            handleEmailChange={handleRegistrationDataChange}
            handlePasswordChange={handleRegistrationDataChange}
            handlePhoneNumberChange={handleRegistrationDataChange}
            handleSubmitForm={handleSubmitForm}
          />
        </Container>
      </Section>
    </>
  );
};
