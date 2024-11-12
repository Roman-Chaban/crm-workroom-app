import type { ChangeEvent, FC } from 'react';

import { useState } from 'react';

import { InputProps, Value } from '@/types/input';

export const Input: FC<InputProps> = ({
  htmlFor = '',
  type = 'text',
  label,
  id = '',
  value,
  onChange,
  placeholder = '',
  style,
  name = '',
  required = false,
  disabled = false,
  autoFocus = false,
  maxLength,
  minLength,
  classNames,
}) => {
  const [inputValue, setInputValue] = useState<Value>(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  return (
    <div className={classNames.container}>
      <label htmlFor={htmlFor} className={classNames.label}>
        {label}
      </label>
      <input
        className={classNames.input}
        type={type}
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={style}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};
