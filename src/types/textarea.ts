import { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';

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
};

export type AreaValue = string;
