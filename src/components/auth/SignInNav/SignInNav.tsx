'use client';

import type { FC } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';

import Image from 'next/image';

import { Button } from '@/components/index';

import { handleNextStep, handlePrevStep } from '@/store/slices/StepsSlice';

interface SignInNavProps {
  isNextButtonDisabled: boolean;
  currentStep: number;
  classNames: {
    container: string;
    nextBtn: string;
    prevBtn?: string;
  };
}

export const SignInNav: FC<SignInNavProps> = ({
  isNextButtonDisabled,
  classNames,
  currentStep,
}) => {
  const dispatch = useAppDispatch();

  const handleNextStepClick = () => {
    dispatch(handleNextStep());
  };

  const handlePrevStepClick = () => {
    dispatch(handlePrevStep());
  };

  const renderPreviousButton = currentStep > 1;

  return (
    <div className={classNames.container}>
      {renderPreviousButton && (
        <Button
          type={'button'}
          className={classNames.prevBtn}
          onClick={handlePrevStepClick}
        >
          <Image
            src={'/images/auth/icons/arrow-previous.svg'}
            alt="Arrow Right Icon"
            width={24}
            height={24}
            priority
          />
          Previous
        </Button>
      )}
      <Button
        type="button"
        className={classNames.nextBtn}
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
