import { FC } from 'react';

import styles from './MultiStepsSignUpEntering.module.scss';

interface MultiStepsSignUpEnteringHeaderProps {
  stepTitle: string;
  title: string;
}

export const MultiStepsSignUpEnteringHeader: FC<
  MultiStepsSignUpEnteringHeaderProps
> = ({ stepTitle, title }) => {
  return (
    <div className={styles['stepFormHeader']}>
      <h5 className={styles['stepFormHeaderStepsFigures']}>{stepTitle}</h5>
      <h3 className={styles['stepFormHeaderTitle']}>{title}</h3>
    </div>
  );
};
