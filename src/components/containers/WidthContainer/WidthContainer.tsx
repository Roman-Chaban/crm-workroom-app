import React, { type FC, ReactNode } from 'react';

export interface WidthContainerProps {
  children: ReactNode;
}

export const WidthContainer: FC<WidthContainerProps> = ({ children }) => {
  const widthContainerStyles = {
    width: '100%',
    height: '100%',
  };

  return <div style={widthContainerStyles}>{children}</div>;
};
