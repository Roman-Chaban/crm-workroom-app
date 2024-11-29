import type { FC } from 'react';

import { StepsListItem } from '@/components/index/index';

import { stepsList } from '@/staticData/stepsList';

import styles from './MultiStepsSignUpSidebar.module.scss';

interface StepsListProps {
  currentStep: number;
}

export const StepsList: FC<StepsListProps> = ({ currentStep }) => {
  return (
    <ul className={styles['stepsList']}>
      {stepsList.map((step) => (
        <StepsListItem key={step.id} step={step} currentStep={currentStep} />
      ))}
    </ul>
  );
};
