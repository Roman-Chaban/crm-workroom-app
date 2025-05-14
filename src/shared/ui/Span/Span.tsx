import React, { HTMLProps, ReactNode, type FC } from 'react';

interface SpanProps extends HTMLProps<HTMLSpanElement> {
  children?: ReactNode;
  className: string;
}

export const Span: FC<SpanProps> = ({ className, children, ...rest }) => {
  return (
    <span
      className={className}
      {...rest}
    >
      {children}
    </span>
  );
};
