import type { FC, ReactNode } from 'react';

export interface WidthContainerProps {
  children: ReactNode;
}

export const WidthContainer: FC<WidthContainerProps> = ({ children }) => {
  return <div style={{ width: '100%', height: '100%' }}>{children}</div>;
};
