import { Div, Heading } from '@/index';
import React, { type FC } from 'react';

interface SignInHeaderProps {
  stepTitle: string;
  title: string;
  classNames: {
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
    <Div className={classNames?.header}>
      <Heading
        tag="h5"
        className={classNames?.stepsFigures}
      >
        {stepTitle}
      </Heading>
      <Heading
        tag="h3"
        className={classNames?.headerTitle}
      >
        {title}
      </Heading>
    </Div>
  );
};
