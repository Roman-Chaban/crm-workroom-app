'use client';

import { useEffect, useState, type FC } from 'react';

import Image from 'next/image';

import { MultiStepsSignUpEnteringMessageButtons } from '@/components/index/index';

import { SmsCode, SmsTimer } from '@/types/reg';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringMessageProps {
  userEmail: string;
  isTimerActive: boolean;
}

export const MultiStepsSignUpEnteringMessage: FC<
  MultiStepsSignUpEnteringMessageProps
> = ({ userEmail, isTimerActive }) => {
  const [smsCode, setSmsCode] = useState<SmsCode>(['', '', '', '', '', '']);
  const [smsTimer, setSmsTimer] = useState<SmsTimer>(30);

  useEffect(() => {
    if (isTimerActive && smsTimer > 0) {
      const smsConfirmationInterval = setInterval(() => {
        setSmsTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(smsConfirmationInterval);
      };
    }
  }, [isTimerActive, smsTimer]);

  const handleSmsCodeChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      setSmsCode((prevSms) => {
        const updated = [...prevSms];
        updated[index] = value;
        return updated;
      });
    }
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
