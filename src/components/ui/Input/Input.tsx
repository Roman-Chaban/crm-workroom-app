import React, { type FC } from 'react';

import { InputProps } from '@/types/InputTypes';

export const Input: FC<InputProps> = ({
  htmlFor = '',
  type = 'text',
  label,
  id = '',
  placeholder = '',
  style,
  name = '',
  disabled = false,
  autoFocus = false,
  maxLength,
  minLength,
  classNames,
  value,
  onChange,
  icon = '',
  checked,
  isRequired = true,
  onIconClick,
}) => {
  return (
    <div className={classNames.container}>
      <label
        htmlFor={htmlFor}
        className={classNames.label}
      >
        {label}
      </label>
      {icon && onIconClick && (
        <div
          className={classNames.inputIcon}
          onClick={onIconClick}
        >
          {icon}
        </div>
      )}
      <input
        className={classNames.input}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        required={isRequired}
        disabled={disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        checked={checked}
      />
    </div>
  );
};
