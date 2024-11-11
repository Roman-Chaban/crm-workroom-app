import type { FC, ReactNode } from 'react';

import { Header, WidthContainer } from '@/components/index/index';

import { main } from '@/classNames/main/mainClassNames';

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <WidthContainer>
      <Header />
      <main className={main}>{children}</main>
    </WidthContainer>
  );
};
