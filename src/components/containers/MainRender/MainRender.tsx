import { ReactNode } from 'react';

import { Main } from '@/components/index';

export const MainRender = ({ children }: { children: ReactNode }) => {
  return <Main>{children}</Main>;
};
