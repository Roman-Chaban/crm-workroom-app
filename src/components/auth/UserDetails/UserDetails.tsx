'use client';

import React, { type FC } from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';

import { Container, Section, SignInHeader, UserDetailsForm } from '@/index/index';

import { Toaster } from 'react-hot-toast';

import styles from './UserDetails.module.scss';

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
