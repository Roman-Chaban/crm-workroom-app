'use client';

import React, { FC, ReactNode } from 'react';

import { Header, Grid } from '@/components/index/index';

import { usePathname } from 'next/navigation';
import { NavPaths } from '@/enums/navPaths';

import styles from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const pathname = usePathname();
  const isHeaderRender = pathname === NavPaths.SIGN_IN || pathname === NavPaths.MULTI_STEP_SIGN_IN;
  return (
    <Grid gap="50px">
      {!isHeaderRender && <Header />}
      <main className={styles['main']}>{children}</main>
    </Grid>
  );
};
