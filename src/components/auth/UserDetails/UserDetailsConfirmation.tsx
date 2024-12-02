import React, { ChangeEvent, type FC } from 'react';

import { SmsCode } from '@/types/registration';

import styles from './UserDetails.module.scss';

interface UserDetailsConfirmationProps {
  smsCode: SmsCode;
  handleSmsCodeChange: (index: number, value: string) => void;
}

export const UserDetailsConfirmation: FC<UserDetailsConfirmationProps> = ({
  handleSmsCodeChange,
  smsCode,
}) => {
  const handleSmsCodeInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    handleSmsCodeChange(index, event.target.value);
  };

  const handleSmsCodeInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const target = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !target.value && index > 0) {
      const prev = target.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
    } else if (/\d/.test(event.key) && target.value && index < smsCode.length - 1) {
      const next = target.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  return (
    <div className={styles['multiMessageButtonsContainer']}>
      {smsCode.map((value, index) => (
        <input
          key={index}
          className={styles['multiMessageConfirmationButton']}
          type="text"
          maxLength={1}
          value={value}
          onChange={(event) => handleSmsCodeInputChange(index, event)}
          onKeyDown={(event) => handleSmsCodeInputKeyDown(event, index)}
        />
      ))}
    </div>
  );
};
