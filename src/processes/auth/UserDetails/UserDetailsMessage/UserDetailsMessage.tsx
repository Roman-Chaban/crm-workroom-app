'use client';

import React, { FC, useEffect, useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { Div, Heading } from '@/index';
import { UserDetailsConfirmation } from '../UserDetailsConfirmation/UserDetailsConfirmation';
import { ConfirmationResponse, SmsCode, SmsTimer } from '@/shared/types/RegistrationTypes';
import { toast, Toaster } from 'react-hot-toast';
import { confirmUserRegistration } from '@/entities/api/confirmation';
import { UserDetailsMessageProps } from '@/shared/interfaces/UserDetailsInterface';
import styles from '../UserDetails.module.scss';

const CODE_LENGTH = 6;
const INITIAL_TIMER: SmsTimer = 30;

export const UserDetailsMessage: FC<UserDetailsMessageProps> = ({
  userEmail,
  isTimerActive,
  onSmsCodeComplete,
  isSubmitting,
  setIsSubmitting,
}) => {
  const [smsCode, setSmsCode] = useState<SmsCode>(Array(CODE_LENGTH).fill(''));
  const [smsTimer, setSmsTimer] = useState<SmsTimer>(INITIAL_TIMER);

  const confirmationCodeMutation = useMutation<
    ConfirmationResponse,
    Error,
    [string, string, string]
  >({
    mutationFn: async ([confirmationCode, accessToken, refreshToken]) =>
      confirmUserRegistration({
        email: userEmail,
        confirmationCode,
        accessToken,
        refreshToken,
      }),
    onSuccess: (response) => {
      toast.success('Confirmation successful. Proceed to enter password.');
      if (response.accessToken && response.refreshToken) {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      }
    },
    onError: (error) => {
      toast.error(error.message || 'Confirmation failed');
    },
  });

  useEffect(() => {
    if (!isTimerActive || smsTimer <= 0) return;

    const interval = setInterval(() => {
      setSmsTimer((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerActive, smsTimer]);

  useEffect(() => {
    const isCodeCompleted = smsCode.every((digit) => digit !== '');
    onSmsCodeComplete(isCodeCompleted);

    if (isCodeCompleted && !isSubmitting) {
      handleSubmitSmsCode();
    }
  }, [smsCode]);

  const handleSmsCodeChange = useCallback((index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      setSmsCode((prev) => {
        const updated = [...prev];
        updated[index] = value;
        return updated;
      });
    }
  }, []);

  const handleSubmitSmsCode = useCallback(() => {
    const confirmationCode = smsCode.join('');
    if (confirmationCode.length !== CODE_LENGTH || isNaN(Number(confirmationCode))) {
      toast.error('Invalid code. Please enter a 6-digit numeric code.');
      return;
    }
    setIsSubmitting(true);

    const accessToken = localStorage.getItem('accessToken') || '';
    const refreshToken = localStorage.getItem('refreshToken') || '';

    confirmationCodeMutation.mutate([confirmationCode, accessToken, refreshToken]);
  }, [smsCode, setIsSubmitting, confirmationCodeMutation]);

  const timerDisplay = isTimerActive
    ? smsTimer > 0
      ? `00:${smsTimer < 10 ? `0${smsTimer}` : smsTimer}`
      : 'expired'
    : 'waiting to start';

  return (
    <>
      <Toaster />
      <Div className={styles.multiMessageBlock}>
        <Div className={styles.multiMessageLabelContainer}>
          <Heading
            tag="h5"
            className={styles.multiMessageLabel}
          >
            Code from Email
          </Heading>
          <UserDetailsConfirmation
            handleSmsCodeChange={handleSmsCodeChange}
            smsCode={smsCode}
          />
        </Div>
        <Div className={styles.stepFormSubmittedMessageBlock}>
          <Heading
            tag="h4"
            className={styles.stepFormSubmittedMessage}
          >
            <Image
              src="/images/auth/icons/hint.svg"
              alt="Hint Icon"
              width={24}
              height={24}
            />
            An email was sent to <b>{userEmail}</b>. It will be valid for {timerDisplay}.
          </Heading>
        </Div>
      </Div>
    </>
  );
};
