import type { FC } from 'react';

import { Option, Select as SelectProps } from '@/interfaces/select';

import styles from './Select.module.scss';

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
    <div className={styles['selectContainer']}>
      <label htmlFor={htmlFor} className={styles['selectLabel']}>
        {label}
      </label>
      <select
        name={name}
        id={id}
        onChange={onChange}
        className={styles['select']}
      >
        <option disabled className={styles['selectDefaultOption']}>
          {defaultValue}
        </option>
        {options.map((option: Option) => (
          <option className={styles['selectOption']} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
