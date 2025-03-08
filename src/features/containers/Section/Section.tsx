import React, { FC, HTMLProps, type ReactNode } from 'react';

interface SectionProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};
