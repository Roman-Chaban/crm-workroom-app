import type { FC } from 'react';

import { StepItem } from '@/types/steps-item';

import styles from './MultiStepsSignUpSidebar.module.scss';

interface StepsListItemProps {
  step: StepItem;
  currentStep: number;
}

export const StepsListItem: FC<StepsListItemProps> = ({
  step,
  currentStep,
}) => {
  const isActive = currentStep === step.id;
  return (
    <li
      className={`${styles['stepsListItem']} ${
        isActive ? styles['activeText'] : ''
      } `}
    >
      <span
        className={`${styles['stepsListItemCircle']} ${
          isActive ? styles['active'] : ''
        } `}
      ></span>
      {step.label}
    </li>
  );
};
