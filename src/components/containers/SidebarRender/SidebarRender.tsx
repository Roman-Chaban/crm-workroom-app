'use client';

import { usePathname } from 'next/navigation';

import { HomeClient } from '../HomeClient/HomeClient';

import { NavPaths } from '@/enums/nav-paths';

export const SidebarRender = () => {
  const pathname = usePathname();
  const isSidebarRender =
    pathname === NavPaths.SIGN_IN || pathname === NavPaths.MULTI_STEP_SIGN_IN;
  return <>{!isSidebarRender && <HomeClient />}</>;
};
