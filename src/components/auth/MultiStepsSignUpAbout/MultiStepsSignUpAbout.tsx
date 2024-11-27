import type { FC } from 'react';

import {
  Container,
  Section,
  MultiStepsSignUpAboutForm,
  MultiStepsSignUpEnteringStepsFooter,
} from '@/components/index';

import styles from './MultiStepsSignUpAbout.module.scss';

interface MultiStepsSignUpAboutProps {
  currentStep: number;
}

export const MultiStepsSignUpAbout: FC<MultiStepsSignUpAboutProps> = ({
  currentStep,
}) => {
  return (
    <Section className={styles['MultiStepsSignUpAbout']}>
      <Container className={styles['MultiStepsSignUpAboutContainer']}>
        <MultiStepsSignUpAboutForm />
        <MultiStepsSignUpEnteringStepsFooter
          classNames={{
            container: styles['multiStepsFooter'],
            nextBtn: styles['multiStepsNextButton'],
            prevBtn: styles['multiStepsPreviousButton'],
          }}
          currentStep={currentStep}
          isNextButtonDisabled
        />
      </Container>
    </Section>
  );
};
