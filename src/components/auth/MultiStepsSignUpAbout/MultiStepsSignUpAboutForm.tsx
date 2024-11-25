import type { FC } from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';

import { MultiStepsSignUpEnteringHeader } from '@/components/index';

import styles from './MultiStepsSignUpAbout.module.scss';

export const MultiStepsSignUpAboutForm: FC = () => {
  const currentStep = useAppSelector((state) => state.steps.currentStep);
  return (
    <form className={styles['stepForm']}>
      <MultiStepsSignUpEnteringHeader
        title="Tell about yourself"
        stepTitle={`Step ${currentStep}/4`}
        classNames={{
          header: styles['stepFormHeader'],
          headerTitle: styles['stepFormHeaderTitle'],
          stepsFigures: styles['stepFormHeaderStepsFigures'],
        }}
      />
    </form>
  );
};
