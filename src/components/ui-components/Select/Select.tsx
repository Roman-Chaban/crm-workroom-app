import type { FC } from 'react';

import { Option, Select as SelectProps } from '@/interfaces/select';

import {
  select,
  selectContainer,
  option as selectOption,
  label as selectLabel,
  defaultOption,
} from '@/classNames/select/select';

export const Select: FC<SelectProps> = ({
  options,
  htmlFor,
  defaultValue,
  id,
  name,
  label,
  onChange,
}) => {
  return (
    <div className={selectContainer}>
      <label htmlFor={htmlFor} className={selectLabel}>
        {label}
      </label>
      <select name={name} id={id} onChange={onChange} className={select}>
        <option disabled className={defaultOption}>
          {defaultValue}
        </option>
        {options.map((option: Option) => (
          <option className={selectOption} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
