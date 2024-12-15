import { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type TextareaType = {
  className: string;
  labelClassName: string;
  name: string;
  id: string;
  style?: CSSProperties;
  htmlFor: string;
  children?: ReactNode;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  ref?: RefObject<HTMLTextAreaElement>;
  register: UseFormRegisterReturn;
};

export type AreaValue = string;
