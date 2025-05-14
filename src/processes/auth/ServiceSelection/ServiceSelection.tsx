'use client';

import React, { type FC } from 'react';

import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';

import { Container, Section, ServiceSelectionForm, SignInHeader } from '@/index';

import { Toaster } from 'react-hot-toast';

import styles from './ServiceSelection.module.scss';

export const ServiceSelection: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  useDocumentTitle('Registration | Service Selection');

  return (
    <Section
      className={styles['MultiStepsSignUpAbout']}
      aria-labelledby="service-selection-title"
    >
      <Toaster />
      <Container className={styles['MultiStepsSignUpAboutContainer']}>
        <SignInHeader
          title="Tell about yourself"
          stepTitle={`Step ${currentStep}/4`}
          classNames={{
            header: styles['stepFormHeader'],
            headerTitle: styles['stepFormHeaderTitle'],
            stepsFigures: styles['stepFormHeaderStepsFigures'],
          }}
        />

        <ServiceSelectionForm currentStep={currentStep} />
      </Container>
    </Section>
  );
};
