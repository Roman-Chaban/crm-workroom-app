'use client';

import React, { type FC, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import Image from 'next/image';

import { Div, Heading } from '@/index';

import { UserDetailsConfirmation } from './UserDetailsConfirmation';

import {
  ConfirmationResponse,
  SmsCode,
  SmsTimer,
} from '@/types/RegistrationTypes';

import { toast, Toaster } from 'react-hot-toast';

import { confirmUserRegistration } from '@/api/confirmation';

import { UserDetailsMessageProps } from '@/interfaces/UserDetailsInterface';

import styles from './UserDetails.module.scss';

export const UserDetailsMessage: FC<UserDetailsMessageProps> = ({
  userEmail,
  isTimerActive,
  onSmsCodeComplete,
  isSubmitting,
  setIsSubmitting,
}) => {
  const [smsCode, setSmsCode] = useState<SmsCode>(['', '', '', '', '', '']);
  const [smsTimer, setSmsTimer] = useState<SmsTimer>(30);

  const confirmationCodeMutation = useMutation<
    ConfirmationResponse,
    Error,
    [string, string, string]
  >({
    mutationFn: async ([confirmationCode, accessToken, refreshToken]) => {
      return confirmUserRegistration({
        email: userEmail,
        confirmationCode,
        accessToken,
        refreshToken,
      });
    },
    onSuccess: (response: ConfirmationResponse) => {
      toast.success('Confirmation successful. Proceed to enter password.');
      if (response.accessToken && response.refreshToken) {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Confirmation failed');
    },
  });

  useEffect(() => {
    let smsConfirmationInterval: NodeJS.Timeout | null = null;

    if (isTimerActive && smsTimer > 0) {
      smsConfirmationInterval = setInterval(() => {
        setSmsTimer((prev) => {
          if (prev <= 1) {
            clearInterval(smsConfirmationInterval!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(smsConfirmationInterval!);
    }

    return () => {
      clearInterval(smsConfirmationInterval!);
    };
  }, [isTimerActive, smsTimer]);

  useEffect(() => {
    const isCodeCompleted = smsCode.every((digit) => digit !== '');
    onSmsCodeComplete(isCodeCompleted);
    if (isCodeCompleted && !isSubmitting) {
      handleSubmitSmsCode();
    }
  }, [smsCode, isSubmitting, onSmsCodeComplete, smsTimer]);

  const handleSmsCodeChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      setSmsCode((prev) => {
        const updated = [...prev];
        updated[index] = value;
        return updated;
      });
    }
  };

  const handleSubmitSmsCode = () => {
    const confirmationCode = smsCode.join('');

    if (confirmationCode.length !== 6 || isNaN(Number(confirmationCode))) {
      toast.error('Invalid code. Please enter a 6-digit numeric code.');
      return;
    }
    setIsSubmitting(true);

    const accessToken = localStorage.getItem('accessToken') || '';
    const refreshToken = localStorage.getItem('refreshToken') || '';

    confirmationCodeMutation.mutate([
      confirmationCode,
      accessToken,
      refreshToken,
    ]);
  };

  const timerDisplay = isTimerActive
    ? smsTimer > 0
      ? `00:${smsTimer < 10 ? `0${smsTimer}` : smsTimer} `
      : 'expired'
    : 'waiting to start';

  return (
    <>
      <Toaster />
      <Div className={styles['multiMessageBlock']}>
        <Div className={styles['multiMessageLabelContainer']}>
          <Heading
            tag="h5"
            className={styles['multiMessageLabel']}
          >
            Code from Email
          </Heading>

          <UserDetailsConfirmation
            handleSmsCodeChange={handleSmsCodeChange}
            smsCode={smsCode}
          />
        </Div>

        <Div className={styles['stepFormSubmittedMessageBlock']}>
          <Heading
            tag="h4"
            className={styles['stepFormSubmittedMessage']}
          >
            <Image
              src="/images/auth/icons/hint.svg"
              alt="Hint Icon"
              width={24}
              height={24}
            />
            An email was sent to **{userEmail}**. It will be valid for{' '}
            {timerDisplay}.
          </Heading>
        </Div>
      </Div>
    </>
  );
};
