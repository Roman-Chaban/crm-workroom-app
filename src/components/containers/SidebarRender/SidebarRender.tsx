'use client';

import { usePathname } from 'next/navigation';

import { HomeClient } from '../HomeClient/HomeClient';

import { SidebarNavPaths } from '@/enums/nav-paths';

export const SidebarRender = () => {
  const pathname = usePathname();
  const isSidebarRender =
    pathname === SidebarNavPaths.SIGN_IN ||
    pathname === SidebarNavPaths.MULTI_STEP_SIGN_IN;
  return <>{!isSidebarRender && <HomeClient />}</>;
};
