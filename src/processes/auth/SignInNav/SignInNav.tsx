'use client';

import React, { type FC } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import Image from 'next/image';

import { Button, Div } from '@/index';

import { SignInNavProps } from '@/shared/interfaces/SignInInterface';

import {
  handleNextStep,
  handlePrevStep,
} from '@/shared/store/slices/StepsSlice';

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

  const lastStepSubmit = currentStep > 2;

  return (
    <Div className={classNames.container}>
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
        type={lastStepSubmit ? 'submit' : 'button'}
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
    </Div>
  );
};
