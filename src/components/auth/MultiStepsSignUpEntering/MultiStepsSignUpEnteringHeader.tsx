import type { FC } from 'react';

interface MultiStepsSignUpEnteringHeaderProps {
  stepTitle: string;
  title: string;
  classNames?: {
    header: string;
    stepsFigures: string;
    headerTitle: string;
  };
}

export const MultiStepsSignUpEnteringHeader: FC<
  MultiStepsSignUpEnteringHeaderProps
> = ({ stepTitle, title, classNames }) => {
  return (
    <div className={classNames?.header}>
      <h5 className={classNames?.stepsFigures}>{stepTitle}</h5>
      <h3 className={classNames?.headerTitle}>{title}</h3>
    </div>
  );
};
