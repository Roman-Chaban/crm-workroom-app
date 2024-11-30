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
import { useAppSelector } from '@/hooks/useAppSelector';

interface MutationPayload {
  userData: RegistrationUserData;
  queryParams: Record<string, string | number | boolean>;
}

export const UserDetails: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  const [registrationData, setRegistrationData] =
    useState<RegistrationUserData>({
      id: '',
      email: '',
      password: '',
      phoneNumber: '',
    });

  const registerUserMutation = useMutation({
    mutationFn: ({ userData, queryParams }: MutationPayload) =>
      registerUser(userData, queryParams),
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
      registrationData.id ||
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
      !registrationData.id ||
      !registrationData.email ||
      !registrationData.password ||
      !registrationData.phoneNumber
    ) {
      toast.error('Please fill in all fields!');
      return;
    }
    const queryParams = {
      step: currentStep,
      email: registrationData.email,
      password: registrationData.password,
      phoneNumber: registrationData.phoneNumber,
    };

    registerUserMutation.mutate({
      userData: registrationData,
      queryParams,
    });
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
