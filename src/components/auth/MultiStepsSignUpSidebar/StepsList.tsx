import type { FC } from 'react';

import { StepsListItem } from './StepsListItem';

import { stepsList } from '@/static-data/steps-list';

import styles from './MultiStepsSignUpSidebar.module.scss';

export const StepsList: FC = () => {
  return (
    <ul className={styles['stepsList']}>
      {stepsList.map((step) => (
        <StepsListItem key={step.id} step={step} />
      ))}
    </ul>
  );
};
