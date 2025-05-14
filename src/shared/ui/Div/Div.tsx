import React, { CSSProperties, HTMLProps, ReactNode, type FC } from 'react';

interface DivProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Div: FC<DivProps> = ({ children, className, style, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      title={title}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};
