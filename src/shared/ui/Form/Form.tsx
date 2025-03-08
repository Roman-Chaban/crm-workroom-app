import React, { FormEvent, HTMLProps, ReactNode, type FC } from 'react';

interface FormProps extends HTMLProps<HTMLFormElement> {
  children: ReactNode;
  className?: string;
  autoComplete?: string;
  action?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({
  children,
  className,
  autoComplete,
  action,
  onSubmit,
  ...rest
}) => {
  return (
    <form
      action={action}
      className={className}
      autoComplete={autoComplete}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </form>
  );
};
