import React, { type FC, ReactNode } from 'react';

import { Div } from '@/index';

export interface WidthContainerProps {
  children: ReactNode;
}

export const WidthContainer: FC<WidthContainerProps> = ({ children }) => {
  const widthContainerStyles = {
    width: '100%',
    height: '100%',
  };

  return <Div style={widthContainerStyles}>{children}</Div>;
};
