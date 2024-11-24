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
  IsTimerActive,
  RegistrationUserData,
} from '@/types/reg';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringFormProps {
  registrationData: RegistrationUserData;
  handleEmailChange: (event: EventType) => void;
  handlePasswordChange: (event: EventType) => void;
  handlePhoneNumberChange: (event: EventType) => void;
  handleSubmitForm: (event: FormEvent) => void;
}

export const MultiStepsSignUpEnteringForm: FC<
  MultiStepsSignUpEnteringFormProps
> = ({
  registrationData,
  handlePhoneNumberChange,
  handleEmailChange,
  handlePasswordChange,
  handleSubmitForm,
}) => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);
  const [isTimerActive, setIsTimerActive] = useState<IsTimerActive>(false);
  const [isConfirmationMessageVisible, setIsConfirmationMessageVisible] =
    useState<IsConfirmationMessageVisible>(false);
  const [isSmsCompleted, setIsSmsCompleted] = useState<boolean>(false);

  const handleSubmitTimerStart = () => {
    if (
      registrationData.email &&
      registrationData.password &&
      registrationData.phoneNumber
    ) {
      setIsTimerActive(true);
      setIsConfirmationMessageVisible(true);
    } else {
      toast('Please enter email, password and phone number');
    }
  };

  const handleSmsCodeCompleted = (isComplete: boolean) => {
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
      />
      <Container className={styles['stepFormMain']}>
        <MultiStepsSignUpEnteringFormFields
          registrationData={registrationData}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleSubmitConfirmationData={handleSubmitTimerStart}
        />
        {isConfirmationMessageVisible && (
          <MultiStepsSignUpEnteringMessage
            userEmail={registrationData.email}
            isTimerActive={isTimerActive}
            onSmsCodeComplete={handleSmsCodeCompleted}
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
