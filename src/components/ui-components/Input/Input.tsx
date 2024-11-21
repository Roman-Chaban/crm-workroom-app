import type { FC } from 'react';

import Image from 'next/image';

import { InputProps } from '@/types/input';

export const Input: FC<InputProps> = ({
  htmlFor = '',
  type = 'text',
  label,
  id = '',
  placeholder = '',
  style,
  name = '',
  required = false,
  disabled = false,
  autoFocus = false,
  maxLength,
  minLength,
  classNames,
  value,
  onChange,
  icon = '',
  checked,
  onIconClick,
}) => {
  return (
    <div className={classNames.container}>
      <label htmlFor={htmlFor} className={classNames.label}>
        {label}
      </label>
      {icon && onIconClick && (
        <Image
          src={icon}
          width={24}
          height={24}
          alt="Icon"
          className={classNames.inputIcon}
          onClick={onIconClick}
        />
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
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        checked={checked}
      />
    </div>
  );
};
