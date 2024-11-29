import type { FC } from 'react';

import { Container, Section, ServiceSelectionForm } from '@/components/index';

import { Toaster } from 'react-hot-toast';

import styles from './ServiceSelection.module.scss';

interface ServiceSelectionProps {
  currentStep: number;
}

export const ServiceSelection: FC<ServiceSelectionProps> = ({}) => {
  return (
    <Section className={styles['MultiStepsSignUpAbout']}>
      <Toaster />
      <Container className={styles['MultiStepsSignUpAboutContainer']}>
        <ServiceSelectionForm />
      </Container>
    </Section>
  );
};
