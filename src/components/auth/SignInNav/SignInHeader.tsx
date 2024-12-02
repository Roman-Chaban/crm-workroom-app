import type { FC } from 'react';

interface SignInHeaderProps {
  stepTitle: string;
  title: string;
  classNames?: {
    header: string;
    stepsFigures: string;
    headerTitle: string;
  };
}

export const SignInHeader: FC<SignInHeaderProps> = ({
  stepTitle,
  title,
  classNames,
}) => {
  return (
    <div className={classNames?.header}>
      <h5 className={classNames?.stepsFigures}>{stepTitle}</h5>
      <h3 className={classNames?.headerTitle}>{title}</h3>
    </div>
  );
};
