'use client';

import { useState, type FC, type FormEvent } from 'react';

import { MultiStepsSignUpEnteringHeader } from './MultiStepsSignUpEnteringHeader';

import { EventType } from '@/types/signIn';

import { MultiStepsSignUpEnteringFormFields } from './MultiStepsSignUpEnteringFormFields';

import { MultiStepsSignUpEnteringStepsFooter } from './MultiStepsSignUpEnteringStepsFooter';

import { MultiStepsSignUpEnteringMessage } from './MultiStepsSignUpEnteringMessage';

import { Container } from '@/components/index';

import { toast } from 'react-toastify';

import styles from './MultiStepsSignUpEntering.module.scss';
import {
  IsConfirmationMessageVisible,
  IsTimerActive,
  RegistrationUserData,
} from '@/types/reg';
import { useAppSelector } from '@/hooks/useAppSelector';

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

  const isNextButtonDisabled =
    !registrationData.email ||
    !registrationData.password ||
    !registrationData.phoneNumber;

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
          />
        )}
      </Container>
      <MultiStepsSignUpEnteringStepsFooter
        isNextButtonDisabled={isNextButtonDisabled}
      />
    </form>
  );
};
