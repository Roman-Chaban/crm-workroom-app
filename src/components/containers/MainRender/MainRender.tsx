import React, { type ReactNode } from 'react';

import { Main } from '@/components/index';

export const MainRender = ({ children }: { children: ReactNode }) => {
  return <Main>{children}</Main>;
};
