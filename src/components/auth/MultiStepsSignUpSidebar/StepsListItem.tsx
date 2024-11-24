import type { FC } from 'react';

import { StepItem } from '@/types/steps-item';

import styles from './MultiStepsSignUpSidebar.module.scss';
import Image from 'next/image';

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
