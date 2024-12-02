import React, { type FC, ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  className?: string;
}

export const Box: FC<BoxProps> = ({ children, className }) => {
  const boxCSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
  };
  return (
    <div
      style={boxCSSProperties}
      className={className}
    >
      {children}
    </div>
  );
};
