'use client';

import { useAppSelector } from '@/hooks/useAppSelector';

import {
  Container,
  MultiStepSignUpEntering,
  MultiStepsSignUpAbout,
  MultiStepsSignUpSidebar,
} from '@/components/index';

import { STEPS } from '@/enums/steps';

import styles from '@/styles/pages/signIn.module.scss';

export default function MultiStepsSignUpPage() {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  const renderRegistrationStepsContent = (): JSX.Element => {
    switch (currentStep) {
      case STEPS.ENTER_STEP:
        return <MultiStepSignUpEntering />;
      case STEPS.ABOUT_STEP:
        return <MultiStepsSignUpAbout />;
      default:
        return <MultiStepsSignUpAbout />;
    }
  };

  return (
    <Container className={styles['signUpSteps']}>
      <MultiStepsSignUpSidebar currentStep={currentStep} />
      {renderRegistrationStepsContent()}
    </Container>
  );
}
