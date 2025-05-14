import React, { HTMLProps, ReactNode, type FC } from 'react';

interface HeaderProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
  className: string;
}

export const Header: FC<HeaderProps> = ({ children, className, ...rest }) => {
  return (
    <header
      className={className}
      {...rest}
    >
      {children}
    </header>
  );
};
