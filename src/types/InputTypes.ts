import { ChangeEvent, CSSProperties, HTMLProps, ReactNode } from 'react';

export interface InputClassNames {
  container: string;
  input: string;
  label: string;
  inputIcon?: string;
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  htmlFor: string;
  type: InputTypes;
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
  checked?: boolean;
  style?: CSSProperties;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  classNames: InputClassNames;
  icon?: ReactNode;
  isRequired?: boolean;
  onIconClick?: () => void;
}

export type InputTypes =
  | 'text'
  | 'email'
  | 'search'
  | 'password'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'time'
  | 'tel';

export type Value = string;
