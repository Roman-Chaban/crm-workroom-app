import React, { CSSProperties, forwardRef } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  label: string;
  placeholder: string;
  required?: boolean;
  style?: CSSProperties;
  type: string;
  name: string;
  id: string;
  classNames?: {
    label: string;
    input: string;
  };
  errorMessage?: string;
}

export const RegisterInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      register,
      label,
      placeholder,
      type,
      name,
      id,
      classNames,
      required,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={classNames?.label}>
        <label htmlFor={id}>{label}</label>
        <input
          {...register}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={classNames?.input}
          required={required}
          {...props}
        />
        {errorMessage && <span className="error">{errorMessage}</span>}
      </div>
    );
  },
);

RegisterInput.displayName = 'RegisterInput';
