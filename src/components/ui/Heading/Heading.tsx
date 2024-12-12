import React, { HTMLProps, ReactNode, type FC } from 'react';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends HTMLProps<HTMLElement> {
  tag: HeadingLevels;
  children: ReactNode;
  className: string;
}

export const Heading: FC<HeadingProps> = ({ tag, children, className }) => {
  const Title = tag;
  return <Title className={className}>{children}</Title>;
};
