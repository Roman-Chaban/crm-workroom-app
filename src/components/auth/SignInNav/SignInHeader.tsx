import React, { type FC } from 'react';

import { Div, Heading } from '@/index';

import { SignInHeaderProps } from '@/interfaces/SignInInterface';

export const SignInHeader: FC<SignInHeaderProps> = ({
  stepTitle,
  title,
  classNames,
}) => {
  return (
    <Div
      className={classNames?.header}
      role="region"
      aria-label="header"
    >
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
