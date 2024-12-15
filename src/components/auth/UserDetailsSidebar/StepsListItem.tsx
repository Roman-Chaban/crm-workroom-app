import React, { type FC } from 'react';

import Image from 'next/image';

import { StepItem } from '@/types/StepItemTypes';

import styles from './UserDetailsSidebar.module.scss';

interface StepsListItemProps {
  step: StepItem;
  currentStep: number;
}

export const StepsListItem: FC<StepsListItemProps> = ({
  step,
  currentStep,
}) => {
  const isActive = currentStep === step.id;
  const isCompleted = currentStep > step.id;
  const isFirstStepActive = isActive && step.id === 1;

  return (
    <li
      className={`${styles['stepsListItem']} ${
        isCompleted ? styles['completed'] : ''
      } ${isFirstStepActive ? styles['firstStepActive'] : ''}`}
    >
      <span
        className={`${styles['stepsListItemCircle']} ${
          isActive ? styles['active'] : ''
        } ${isCompleted ? styles['completed'] : ''}`}
      >
        {isCompleted && (
          <Image
            src={'/icons/sidebar-icons/done.svg'}
            alt="Done Icon"
            width={24}
            height={24}
            className={styles['doneIcon']}
          />
        )}
      </span>
      {step.label}
    </li>
  );
};
