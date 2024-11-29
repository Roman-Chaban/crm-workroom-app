'use client';

import { useMemo, useState, type FC, type FormEvent } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';

import {
  UserDetailsNav,
  UserDetailsMessage,
  Container,
  UserDetailsHeader,
  UserDetailsFields,
} from '@/components/index/index';

import { EventType } from '@/types/signIn';

import { toast, Toaster } from 'react-hot-toast';

import {
  IsConfirmationMessageVisible,
  IsSmsCompleted,
  IsSubmitting,
  IsTimerActive,
  RegistrationUserData,
} from '@/types/registration';

import styles from './UserDetails.module.scss';

interface UserDetailsFormProps {
  registrationData: RegistrationUserData;
  handleInputChange: (event: EventType) => void;
  handleSubmitForm: (event: FormEvent) => void;
}

export const UserDetailsForm: FC<UserDetailsFormProps> = ({
  registrationData,
  handleInputChange,
  handleSubmitForm,
}) => {
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
    <>
      <Toaster />
      <form className={styles['stepForm']} onSubmit={handleSubmitForm}>
        <UserDetailsHeader
          stepTitle={`Step ${currentStep}/4`}
          title="Valid your email"
          classNames={{
            header: styles['stepFormHeader'],
            headerTitle: styles['stepFormHeaderTitle'],
            stepsFigures: styles['stepFormHeaderStepsFigures'],
          }}
        />
        <Container className={styles['stepFormMain']}>
          <UserDetailsFields
            registrationData={registrationData}
            handleInputChange={handleInputChange}
            handleSubmitConfirmationData={handleSubmitTimerStart}
            isSubmitting={isSubmitting}
          />
          {isConfirmationMessageVisible && (
            <UserDetailsMessage
              userEmail={registrationData.email}
              isTimerActive={isTimerActive}
              onSmsCodeComplete={handleSmsCodeCompleted}
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
            />
          )}
        </Container>
        <UserDetailsNav
          currentStep={currentStep}
          isNextButtonDisabled={isNextButtonDisabled || !isSmsCompleted}
          classNames={{
            container: styles['multiStepsFooter'],
            nextBtn: styles['multiStepsNextButton'],
          }}
        />
      </form>
    </>
  );
};
