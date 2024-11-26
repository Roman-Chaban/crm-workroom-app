'use client';

import { useMemo, useState, type FC, type FormEvent } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';

import {
  MultiStepsSignUpEnteringHeader,
  MultiStepsSignUpEnteringFormFields,
  MultiStepsSignUpEnteringStepsFooter,
  MultiStepsSignUpEnteringMessage,
  Container,
} from '@/components/index/index';

import { EventType } from '@/types/signIn';

import { toast } from 'react-toastify';

import {
  IsConfirmationMessageVisible,
  IsSmsCompleted,
  IsSubmitting,
  IsTimerActive,
  RegistrationUserData,
} from '@/types/registration';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringFormProps {
  registrationData: RegistrationUserData;
  handleInputChange: (event: EventType) => void;
  handleSubmitForm: (event: FormEvent) => void;
}

export const MultiStepsSignUpEnteringForm: FC<
  MultiStepsSignUpEnteringFormProps
> = ({ registrationData, handleInputChange, handleSubmitForm }) => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);
  const [isTimerActive, setIsTimerActive] = useState<IsTimerActive>(false);
  const [isSmsCompleted, setIsSmsCompleted] = useState<IsSmsCompleted>(false);
  const [isSubmitting, setIsSubmitting] = useState<IsSubmitting>(false);
  const [isConfirmationMessageVisible, setIsConfirmationMessageVisible] =
    useState<IsConfirmationMessageVisible>(false);

  const handleSubmitTimerStart = () => {
    if (
      registrationData.email &&
      registrationData.password &&
      registrationData.phoneNumber
    ) {
      setIsTimerActive(true);
      setIsConfirmationMessageVisible(true);
    } else {
      toast('Please enter email, password, and phone number');
    }
  };

  const handleSmsCodeCompleted = (isComplete: IsSmsCompleted) => {
    setIsSmsCompleted(isComplete);
  };

  const isNextButtonDisabled = useMemo(() => {
    return (
      !registrationData.email ||
      !registrationData.password ||
      !registrationData.phoneNumber ||
      !isTimerActive
    );
  }, [
    registrationData.email,
    registrationData.password,
    registrationData.phoneNumber,
    isTimerActive,
  ]);

  return (
    <form className={styles['stepForm']} onSubmit={handleSubmitForm}>
      <MultiStepsSignUpEnteringHeader
        stepTitle={`Step ${currentStep}/4`}
        title="Valid your email"
        classNames={{
          header: styles['stepFormHeader'],
          headerTitle: styles['stepFormHeaderTitle'],
          stepsFigures: styles['stepFormHeaderStepsFigures'],
        }}
      />
      <Container className={styles['stepFormMain']}>
        <MultiStepsSignUpEnteringFormFields
          registrationData={registrationData}
          handleInputChange={handleInputChange}
          handleSubmitConfirmationData={handleSubmitTimerStart}
          isSubmitting={isSubmitting}
        />
        {isConfirmationMessageVisible && (
          <MultiStepsSignUpEnteringMessage
            userEmail={registrationData.email}
            isTimerActive={isTimerActive}
            onSmsCodeComplete={handleSmsCodeCompleted}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
          />
        )}
      </Container>
      <MultiStepsSignUpEnteringStepsFooter
        currentStep={currentStep}
        isNextButtonDisabled={isNextButtonDisabled || !isSmsCompleted}
      />
    </form>
  );
};
