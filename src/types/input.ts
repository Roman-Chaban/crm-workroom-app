import { ChangeEvent, CSSProperties } from 'react';

export interface InputClassNames {
  container: string;
  input: string;
  label: string;
}

export interface InputProps {
  htmlFor: string;
  type: InputTypes;
  label: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
  style?: CSSProperties;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  classNames: InputClassNames;
  icon: string;
}

export type InputTypes =
  | 'text'
  | 'email'
  | 'search'
  | 'password'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'time';

export type Value = string;
