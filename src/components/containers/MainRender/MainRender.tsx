import React, { type ReactNode } from 'react';

import { Main } from '@/index/index';

export const MainRender = ({ children }: { children: ReactNode }) => {
  return <Main>{children}</Main>;
};
