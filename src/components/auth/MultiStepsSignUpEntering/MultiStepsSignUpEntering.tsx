'use client';

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
  type FC,
} from 'react';
import { useMutation } from '@tanstack/react-query';

import {
  Container,
  Section,
  MultiStepsSignUpEnteringForm,
} from '@/components/index';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RegistrationUserData } from '@/types/registration';

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

  const registerUserMutation = useMutation({
    mutationFn: (userData: RegistrationUserData) => registerUser(userData),
    onSuccess: (response) => {
      toast.success(`Code was sent to **${response.email}**`);
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
      localStorage.setItem('registration', JSON.stringify(registrationData));
    }
  }, [registrationData]);

  const handleRegistrationDataChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setRegistrationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (
      !registrationData.email ||
      !registrationData.password ||
      !registrationData.phoneNumber
    ) {
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
            handleInputChange={handleRegistrationDataChange}
            handleSubmitForm={handleSubmitForm}
          />
        </Container>
      </Section>
    </>
  );
};
