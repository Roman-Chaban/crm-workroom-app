'use client';

import { FormEvent, useCallback, useEffect, useState, type FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import {
  Container,
  Section,
  MultiStepsSignUpEnteringForm,
} from '@/components/index';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RegistrationUserData } from '@/types/reg';

import { EventType } from '@/types/signIn';

import { registerUser } from '@/api/registration';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepSignUpEnteringProps {
  currentStep: number;
}

export const MultiStepSignUpEntering: FC<MultiStepSignUpEnteringProps> = ({
  currentStep,
}) => {
  const [registrationData, setRegistrationData] =
    useState<RegistrationUserData>({
      email: '',
      password: '',
      phoneNumber: '',
    });

  const registerUserMutation = useMutation({
    mutationFn: (userData: RegistrationUserData) =>
      registerUser(userData, currentStep),
    onSuccess: () => {
      toast.success(`Code was sent to **${registrationData.email}**`);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Registration failed');
    },
  });

  useEffect(() => {
    const savedRegistrationData = localStorage.getItem('registration');
    if (savedRegistrationData) {
      setRegistrationData(JSON.parse(savedRegistrationData));
    }
  }, []);

  useEffect(() => {
    if (
      registrationData.email ||
      registrationData.password ||
      registrationData.phoneNumber
    ) {
      localStorage.setItem(
        'registrationData',
        JSON.stringify(registrationData)
      );
    }
  }, []);

  const handleRegistrationDataChange = useCallback((event: EventType) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (!registrationData.email || !registrationData.password) {
      toast.error('Please fill in all fields!');
      return;
    }
    registerUserMutation.mutate(registrationData);
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
