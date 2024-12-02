import { ChangeEvent } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface Select {
  htmlFor: string;
  name: string;
  id: string;
  defaultValue: string;
  options: Options;
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export type Options = Array<Option>;
export type SelectedValue = string;
