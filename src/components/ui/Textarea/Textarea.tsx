import React, { type FC } from 'react';

import { TextareaType } from '@/types/textarea';

export const Textarea: FC<TextareaType> = ({
  className,
  name,
  id,
  style,
  children,
  value,
  onChange,
  labelClassName,
  placeholder,
  htmlFor = '',
  ref,
  register,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={labelClassName}
    >
      {children}
      <textarea
        {...register}
        ref={ref}
        className={className}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      />
    </label>
  );
};
