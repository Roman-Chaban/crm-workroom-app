import React, { type FC } from 'react';

import { StepsListItem } from '@/index';

import { StepsListProps } from '@/shared/interfaces/UserDetailsInterface';

import { stepsList } from '@/shared/assets/static/StepsList';

import styles from '../UserDetailsSidebar.module.scss';

export const StepsList: FC<StepsListProps> = ({ currentStep }) => {
  return (
    <ul className={styles['stepsList']}>
      {stepsList.map((step) => (
        <StepsListItem
          key={step.id}
          step={step}
          currentStep={currentStep}
        />
      ))}
    </ul>
  );
};
