import type { FC } from 'react';

import Image from 'next/image';

import { Button } from '@/components/index';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringStepsFooterProps {
  handleSubmitConfirmationData: () => void;
  isNextButtonDisabled: boolean;
}

export const MultiStepsSignUpEnteringStepsFooter: FC<
  MultiStepsSignUpEnteringStepsFooterProps
> = ({ handleSubmitConfirmationData, isNextButtonDisabled }) => {
  return (
    <div className={styles['multiStepsFooter']}>
      <Button
        type="submit"
        className={styles['multiStepsNextButton']}
        onClick={handleSubmitConfirmationData}
        disabled={isNextButtonDisabled}
      >
        Next Step
        <Image
          src={'/images/auth/icons/arrow-right.svg'}
          alt="Arrow Right Icon"
          width={24}
          height={24}
          priority
        />
      </Button>
    </div>
  );
};
