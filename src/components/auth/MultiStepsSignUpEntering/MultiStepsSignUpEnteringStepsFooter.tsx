'use client';

import type { FC } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';

import Image from 'next/image';

import { Button } from '@/components/index';

import { handleNextStep } from '@/store/slices/StepsSlice';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringStepsFooterProps {
  isNextButtonDisabled: boolean;
  currentStep: number;
}

export const MultiStepsSignUpEnteringStepsFooter: FC<
  MultiStepsSignUpEnteringStepsFooterProps
> = ({ isNextButtonDisabled }) => {
  const dispatch = useAppDispatch();

  const handleNextStepClick = () => {
    dispatch(handleNextStep());
  };

  return (
    <div className={styles['multiStepsFooter']}>
      <Button
        type="submit"
        className={styles['multiStepsNextButton']}
        onClick={handleNextStepClick}
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
