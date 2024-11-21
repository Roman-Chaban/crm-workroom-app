'use client';

import type { FC, ReactNode } from 'react';

import { Header, Grid } from '@/components/index/index';

import { usePathname } from 'next/navigation';
import { SidebarNavPaths } from '@/enums/nav-paths';

import styles from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const pathname = usePathname();
  const isHeaderRender =
    pathname === SidebarNavPaths.SIGN_IN ||
    pathname === SidebarNavPaths.MULTI_STEP_SIGN_IN;
  return (
    <Grid gridTemplateRows="1fr" gap="50px">
      {!isHeaderRender && <Header />}
      <main className={styles['main']}>{children}</main>
    </Grid>
  );
};
