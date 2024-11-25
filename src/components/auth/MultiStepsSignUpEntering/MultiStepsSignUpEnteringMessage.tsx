'use client';

import { type FC, useEffect, useState } from 'react';

import Image from 'next/image';

import { SmsCode, SmsTimer } from '@/types/registration';

import { toast } from 'react-toastify';

import { confirmUserRegistration } from '@/api/confirmation-code';

import { MultiStepsSignUpEnteringMessageButtons } from './MultiStepsSignUpEnteringButtons';

import styles from './MultiStepsSignUpEntering.module.scss';
import { useMutation } from '@tanstack/react-query';

interface MultiStepsSignUpEnteringMessageProps {
  userEmail: string;
  isTimerActive: boolean;
  onSmsCodeComplete: (isComplete: boolean) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
}

export const MultiStepsSignUpEnteringMessage: FC<
  MultiStepsSignUpEnteringMessageProps
> = ({
  userEmail,
  isTimerActive,
  onSmsCodeComplete,
  isSubmitting,
  setIsSubmitting,
}) => {
  const [smsCode, setSmsCode] = useState<SmsCode>(['', '', '', '', '', '']);
  const [smsTimer, setSmsTimer] = useState<SmsTimer>(30);

  const confirmationCodeMutation = useMutation({
    mutationFn: async (confirmationCode: string) => {
      return confirmUserRegistration({ email: userEmail, confirmationCode });
    },
    onSuccess: () => {
      toast.success(`Code was sent to **${userEmail}**`);
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
  }, [smsCode, isSubmitting, onSmsCodeComplete]);

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

    confirmationCodeMutation.mutate(confirmationCode);
  };

  return (
    <div className={styles['multiMessageBlock']}>
      <div className={styles['multiMessageLabelContainer']}>
        <h5 className={styles['multiMessageLabel']}>Code from Email</h5>
        <MultiStepsSignUpEnteringMessageButtons
          handleSmsCodeChange={handleSmsCodeChange}
          smsCode={smsCode}
        />
      </div>
      <div className={styles['stepFormSubmittedMessageBlock']}>
        <h4 className={styles['stepFormSubmittedMessage']}>
          <Image
            src="/images/auth/icons/hint.svg"
            alt="Hint Icon"
            width={24}
            height={24}
          />
          An email was sent to **{userEmail}**. It will be valid for{' '}
          {isTimerActive
            ? smsTimer > 0
              ? `00:${smsTimer < 10 ? `0${smsTimer}` : smsTimer}`
              : 'expired'
            : 'waiting to start'}
          .
        </h4>
      </div>
    </div>
  );
};
