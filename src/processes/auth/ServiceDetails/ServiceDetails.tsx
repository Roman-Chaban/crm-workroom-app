'use client';

import React, { type FC } from 'react';

import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';

import { Container, Section, SignInHeader } from '@/index';

import { ServiceDetailsForm } from './ServiceDetailsForm/ServiceDetailsForm';

import styles from './ServiceDetails.module.scss';

export const ServiceDetails: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  useDocumentTitle('Registration | Service Details');

  return (
    <Section
      role="region"
      aria-labelledby="service-details-title"
      aria-live="polite"
      className={styles['serviceDetails']}
    >
      <Container className={styles['serviceDetailsContainer']}>
        <SignInHeader
          title="Tell about your company"
          stepTitle={`Step ${currentStep}/4`}
          classNames={{
            header: styles['stepFormHeader'],
            headerTitle: styles['stepFormHeaderTitle'],
            stepsFigures: styles['stepFormHeaderStepsFigures'],
          }}
        />
        <ServiceDetailsForm currentStep={currentStep} />
      </Container>
    </Section>
  );
};
