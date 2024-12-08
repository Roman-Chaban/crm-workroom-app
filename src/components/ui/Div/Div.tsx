import React, { CSSProperties, ReactNode, type FC } from 'react';

interface DivProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export const Div: FC<DivProps> = ({ children, className, style, title }) => {
  return (
    <div
      title={title}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};
