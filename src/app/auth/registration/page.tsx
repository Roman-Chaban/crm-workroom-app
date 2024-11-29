'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import {
  Container,
  UserDetails,
  ServiceSelection,
  UserDetailsSidebar,
} from '@/components/index';

import { STEPS } from '@/enums/steps';

import styles from '@/styles/pages/signIn.module.scss';

export default function MultiStepsSignUpPage() {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  useDocumentTitle('Registration | User Details');

  const stepComponents: Record<string, JSX.Element> = {
    [STEPS.ENTER_STEP]: <UserDetails />,
    [STEPS.ABOUT_STEP]: <ServiceSelection currentStep={currentStep} />,
  };

  const CurrentStepComponent = stepComponents[currentStep] || (
    <ServiceSelection currentStep={currentStep} />
  );

  return (
    <Container className={styles['signUpSteps']}>
      <UserDetailsSidebar currentStep={currentStep} />
      {CurrentStepComponent}
    </Container>
  );
}
