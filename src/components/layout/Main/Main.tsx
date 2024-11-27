'use client';

import type { FC, ReactNode } from 'react';

import { Header, Grid } from '@/components/index/index';

import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/nav-paths';

import styles from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const pathname = usePathname();
  const isHeaderRender =
    pathname === NavPaths.SIGN_IN || pathname === NavPaths.MULTI_STEP_SIGN_IN;
  return (
    <Grid gridTemplateRows="0fr" gap="50px">
      {!isHeaderRender && <Header />}
      <main className={styles['main']}>{children}</main>
    </Grid>
  );
};
