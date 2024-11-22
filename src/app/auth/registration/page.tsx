'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

import {
  Container,
  MultiStepSignUpEntering,
  MultiStepsSignUpSidebar,
} from '@/components/index';

import { handleSetStep } from '@/store/slices/StepsSlice';

import styles from '@/styles/pages/signIn.module.scss';

export default function MultiStepsSignUpPage() {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  const renderRegistrationStepsContent = (): JSX.Element => {
    switch (currentStep) {
      case 1:
        return <MultiStepSignUpEntering />;
      case 2:
        return <div>Step 2</div>;
      default:
        return <MultiStepSignUpEntering />;
    }
  };

  return (
    <Container className={styles['signUpSteps']}>
      <MultiStepsSignUpSidebar currentStep={currentStep} />
      {renderRegistrationStepsContent()}
    </Container>
  );
}
