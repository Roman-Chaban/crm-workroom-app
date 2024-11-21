import type { FC } from 'react';

import { SmsCode, SmsCodeProperties } from '@/types/reg';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringMessageButtons {
  smsCode: SmsCode;
  handleSmsCodeChange: ({ index, value }: SmsCodeProperties) => void;
}

export const MultiStepsSignUpEnteringMessageButtons: FC<
  MultiStepsSignUpEnteringMessageButtons
> = ({ handleSmsCodeChange, smsCode }) => {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !target.value) {
      const prev = target.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
    } else if (/\d/.test(event.key) && target.value) {
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
          onChange={(event) =>
            handleSmsCodeChange({ index, value: event.target.value })
          }
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  );
};
