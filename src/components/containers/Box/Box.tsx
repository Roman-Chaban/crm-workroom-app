import type { FC, ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ children }) => {
  const boxCSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: '30px',
    justifyContent: 'space-between',
  };
  return <div style={boxCSSProperties}>{children}</div>;
};
