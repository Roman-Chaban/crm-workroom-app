'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import { HomeClient } from '../HomeClient/HomeClient';

import { NAV_PATHS } from '@/enums/navPaths';

export const SidebarRender = () => {
  const pathname = usePathname();
  const isSidebarRender =
    pathname === NAV_PATHS.SIGN_IN || pathname === NAV_PATHS.MULTI_STEP_SIGN_IN;
  return <>{!isSidebarRender && <HomeClient />}</>;
};
