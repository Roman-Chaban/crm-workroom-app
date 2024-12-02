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
  SignInHeader,
  UserDetailsForm,
} from '@/components/index';

import { toast, Toaster } from 'react-hot-toast';

import { RegistrationUserData } from '@/types/registration';

import { registerUser } from '@/api/registration';

import styles from './UserDetails.module.scss';
import { useAppSelector } from '@/hooks/useAppSelector';

export const UserDetails: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);
  return (
    <>
      <Toaster />
      <Section className={styles['multiSteps']}>
        <Container className={styles['multiStepsContainer']}>
          <SignInHeader
            stepTitle={`Step ${currentStep}/4`}
            title="Valid your email"
            classNames={{
              header: styles['stepFormHeader'],
              headerTitle: styles['stepFormHeaderTitle'],
              stepsFigures: styles['stepFormHeaderStepsFigures'],
            }}
          />
          <UserDetailsForm />
        </Container>
      </Section>
    </>
  );
};
