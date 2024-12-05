import React, { ReactNode, type FC } from 'react';

interface AsideProps {
  children: ReactNode;
  className: string;
}

export const Aside: FC<AsideProps> = ({ children, className }) => {
  return <aside className={className}>{children}</aside>;
};
