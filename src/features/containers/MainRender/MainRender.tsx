import React, { type ReactNode } from 'react';

import { Main } from '@/index';

export const MainRender = ({ children }: { children: ReactNode }) => {
  return <Main>{children}</Main>;
};
