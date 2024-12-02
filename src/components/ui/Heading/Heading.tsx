import React, { ReactNode, type FC } from 'react';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className: string;
}

export const Heading: FC<HeadingProps> = ({ tag, children, className }) => {
  const Level = tag;
  return <Level className={className}>{children}</Level>;
};
