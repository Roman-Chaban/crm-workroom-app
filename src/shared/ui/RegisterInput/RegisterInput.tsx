import Image from 'next/image';
import React, { CSSProperties, forwardRef, HTMLProps } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends HTMLProps<HTMLInputElement> {
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
  isIcon?: boolean;
  iconClassName?: string;
  iconPath?: string;
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
      iconPath,
      isIcon,
      iconClassName,
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
        {isIcon && iconPath ? (
          <Image
            src={iconPath}
            alt={name}
            width={24}
            height={24}
            className={iconClassName}
          />
        ) : (
          <></>
        )}

        {errorMessage && <span className="error">{errorMessage}</span>}
      </div>
    );
  },
);

RegisterInput.displayName = 'RegisterInput';
