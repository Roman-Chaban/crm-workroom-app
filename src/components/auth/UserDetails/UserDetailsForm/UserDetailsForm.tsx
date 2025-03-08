'use client';

import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FC,
  type FormEvent,
} from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useMutation } from '@tanstack/react-query';

import {
  UserDetailsMessage,
  Container,
  UserDetailsFields,
  SignInNav,
  Form,
} from '@/index/index';

import { toast } from 'react-hot-toast';

import { registerUser } from '@/api/registration';

import {
  IsConfirmationMessageVisible,
  IsSmsCompleted,
  IsSubmitting,
  IsTimerActive,
  RegistrationUserData,
} from '@/types/RegistrationTypes';

import styles from '../UserDetails.module.scss';

export const UserDetailsForm: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);

  const [registrationData, setRegistrationData] =
    useState<RegistrationUserData>({
      email: '',
      password: '',
      phoneNumber: '',
    });

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

  const registerUserMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (response) => {
      toast.success(`Code was sent to **${response.email}**`);
      if (response.id) {
        setRegistrationData((prevData) => ({
          ...prevData,
          id: response.id,
        }));
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Registration failed');
    },
  });

  useEffect(() => {
    const savedRegistrationData = localStorage.getItem('registration');
    if (savedRegistrationData) {
      setRegistrationData(JSON.parse(savedRegistrationData));
    }
  }, []);

  useEffect(() => {
    if (
      registrationData.email ||
      registrationData.password ||
      registrationData.phoneNumber
    ) {
      localStorage.setItem('registration', JSON.stringify(registrationData));
    }
  }, [registrationData]);

  const handleRegistrationDataChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setRegistrationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    [],
  );

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !registrationData.email ||
      !registrationData.password ||
      !registrationData.phoneNumber
    ) {
      toast.error('Please fill in all fields!');
      return;
    }

    registerUserMutation.mutate(registrationData);
  };

  return (
    <Form
      className={styles['stepForm']}
      onSubmit={handleSubmitForm}
    >
      <Container className={styles['stepFormMain']}>
        <UserDetailsFields
          registrationData={registrationData}
          handleInputChange={handleRegistrationDataChange}
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

      <SignInNav
        currentStep={currentStep}
        isNextButtonDisabled={isNextButtonDisabled || !isSmsCompleted}
        classNames={{
          container: styles['multiStepsFooter'],
          nextBtn: styles['multiStepsNextButton'],
        }}
      />
    </Form>
  );
};
