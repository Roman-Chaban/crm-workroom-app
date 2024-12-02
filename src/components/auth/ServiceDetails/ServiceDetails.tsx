'use client';

import { type FC } from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import { Container, Section, SignInHeader } from '@/components/index';

import { ServiceDetailsForm } from './ServiceDetailsForm';

import styles from './ServiceDetails.module.scss';

export const ServiceDetails: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  useDocumentTitle('Registration | Service Details');

  return (
    <Section className={styles['serviceDetails']}>
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
