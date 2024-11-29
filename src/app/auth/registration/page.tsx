'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

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

  useDocumentTitle(`CRM Workroom | Registration ${currentStep}`);

  const stepComponents: Record<string, JSX.Element> = {
    [STEPS.ENTER_STEP]: <MultiStepSignUpEntering />,
    [STEPS.ABOUT_STEP]: <MultiStepsSignUpAbout currentStep={currentStep} />,
  };

  const CurrentStepComponent = stepComponents[currentStep] || (
    <MultiStepsSignUpAbout currentStep={currentStep} />
  );

  return (
    <Container className={styles['signUpSteps']}>
      <MultiStepsSignUpSidebar currentStep={currentStep} />
      {CurrentStepComponent}
    </Container>
  );
}
