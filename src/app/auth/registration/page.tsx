'use client';

import React from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import {
  Container,
  UserDetails,
  ServiceSelection,
  UserDetailsSidebar,
  ServiceDetails,
} from '@/index/index';

import { STEPS } from '@/enums/steps';

import styles from '@/styles/pages/signIn.module.scss';

type StepComponent = string;

export default function MultiStepsSignUpPage() {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  useDocumentTitle('Registration - User Details');

  const stepComponents: Record<StepComponent, JSX.Element> = {
    [STEPS.USER_DETAILS_STEP]: <UserDetails />,
    [STEPS.SERVICE_SELECTION_STEP]: <ServiceSelection />,
    [STEPS.SERVICE_DETAILS_STEP]: <ServiceDetails />,
  };

  const CurrentStepComponent = stepComponents[currentStep] || (
    <div>Step number: 4</div>
  );

  return (
    <Container
      role="main"
      className={styles['signUpSteps']}
    >
      <UserDetailsSidebar currentStep={currentStep} />
      {CurrentStepComponent}
    </Container>
  );
}
