import { HTMLProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface CheckBox extends HTMLProps<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  htmlFor: string;
  id: string;
  classNames: CheckBoxClassNames;
}

export interface CheckBoxClassNames {
  label: string;
  checkbox: string;
}
