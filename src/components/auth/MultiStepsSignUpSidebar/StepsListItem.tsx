import type { FC } from 'react';

import { StepItem } from '@/types/steps-item';

import styles from './MultiStepsSignUpSidebar.module.scss';

interface StepsListItemProps {
  step: StepItem;
}

export const StepsListItem: FC<StepsListItemProps> = ({ step }) => {
  return (
    <li className={styles['stepsListItem']}>
      <span className={styles['stepsListItemCircle']}></span>
      {step.label}
    </li>
  );
};
