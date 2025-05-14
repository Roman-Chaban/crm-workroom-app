import React, { type FC } from 'react';

import { CheckBox as CheckBoxProps } from '@/shared/interfaces/CheckBoxInterface';

export const CheckBox: FC<CheckBoxProps> = ({ htmlFor, id, label, register, classNames }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames.label}
    >
      <input
        className={classNames.checkbox}
        type="checkbox"
        id={id}
        {...register}
      />
      {label}
    </label>
  );
};
