'use client';

import type { FC } from 'react';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import { Container, Section, ServiceSelectionForm } from '@/components/index';

import { Toaster } from 'react-hot-toast';

import styles from './ServiceSelection.module.scss';

interface ServiceSelectionProps {
  currentStep: number;
}

export const ServiceSelection: FC<ServiceSelectionProps> = ({}) => {
  useDocumentTitle('Registration | Service Selection');

  return (
    <Section className={styles['MultiStepsSignUpAbout']}>
      <Toaster />
      <Container className={styles['MultiStepsSignUpAboutContainer']}>
        <ServiceSelectionForm />
      </Container>
    </Section>
  );
};
