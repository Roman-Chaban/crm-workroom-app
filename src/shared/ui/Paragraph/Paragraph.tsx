import React, { HTMLProps, ReactNode, type FC } from 'react';

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className: string;
}

export const Paragraph: FC<ParagraphProps> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};
