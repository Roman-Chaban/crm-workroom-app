import React, { HTMLProps, ReactNode, type FC } from 'react';

interface AsideProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
  className: string;
}

export const Aside: FC<AsideProps> = ({ children, className }) => {
  return <aside className={className}>{children}</aside>;
};
