import React, { HTMLProps, ReactNode, type FC } from 'react';

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}

export const Label: FC<LabelProps> = ({ children, htmlFor, className, ...rest }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      {...rest}
    >
      {children}
    </label>
  );
};
