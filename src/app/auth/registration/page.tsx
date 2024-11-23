'use client';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import {
  Container,
  MultiStepSignUpEntering,
  MultiStepsSignUpSidebar,
} from '@/components/index';

import styles from '@/styles/pages/signIn.module.scss';

export default function MultiStepsSignUpPage() {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  useDocumentTitle(`CRM | Registration ${currentStep}/4`);

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
