import type { FC } from 'react';

import {
  Container,
  Section,
  MultiStepsSignUpAboutForm,
  MultiStepsSignUpEnteringStepsFooter,
} from '@/components/index';

import styles from './MultiStepsSignUpAbout.module.scss';
import { Toaster } from 'react-hot-toast';

interface MultiStepsSignUpAboutProps {
  currentStep: number;
}

export const MultiStepsSignUpAbout: FC<MultiStepsSignUpAboutProps> = ({
  currentStep,
}) => {
  return (
    <Section className={styles['MultiStepsSignUpAbout']}>
      <Toaster />
      <Container className={styles['MultiStepsSignUpAboutContainer']}>
        <MultiStepsSignUpAboutForm />
      </Container>
    </Section>
  );
};
