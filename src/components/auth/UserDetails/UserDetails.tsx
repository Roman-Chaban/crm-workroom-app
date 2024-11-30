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

import { Container, Section, UserDetailsForm } from '@/components/index';

import { toast, Toaster } from 'react-hot-toast';

import { RegistrationUserData } from '@/types/registration';

import { registerUser } from '@/api/registration';

import styles from './UserDetails.module.scss';

export const UserDetails: FC = () => {
  const [registrationData, setRegistrationData] =
    useState<RegistrationUserData>({
      id: '',
      email: '',
      password: '',
      phoneNumber: '',
    });

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (response) => {
      toast.success(`Code was sent to **${response.email}**`);
      if (response.id) {
        setRegistrationData((prevData) => ({
          ...prevData,
          id: response.id,
        }));
      }
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
      <Toaster />
      <Section className={styles['multiSteps']}>
        <Container className={styles['multiStepsContainer']}>
          <UserDetailsForm
            registrationData={registrationData}
            handleInputChange={handleRegistrationDataChange}
            handleSubmitForm={handleSubmitForm}
          />
        </Container>
      </Section>
    </>
  );
};
