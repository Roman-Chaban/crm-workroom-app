import React, { type ReactNode } from 'react';

export const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <section className={className}>{children}</section>;
};
