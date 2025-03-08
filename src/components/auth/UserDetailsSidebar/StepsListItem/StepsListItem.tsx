import React, { type FC } from 'react';

import Image from 'next/image';

import { Span } from '@/index';

import { StepsListItemProps } from '@/interfaces/UserDetailsInterface';

import styles from '../UserDetailsSidebar.module.scss';

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
      <Span
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
      </Span>
      {step.label}
    </li>
  );
};
