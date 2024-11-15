'use client';

import type { FC } from 'react';

import { usePathname } from 'next/navigation';

import { nav, navList } from '@/classNames/sidebar/sidebar';

import { sidebarNav } from '@/static-data/sidebar-nav';

import { SidebarNavItem } from '@/components/index/index';

export const SidebarNav: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={nav}>
      <ul className={navList}>
        {sidebarNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <SidebarNavItem key={item.id} item={item} isActive={isActive} />
          );
        })}
      </ul>
    </nav>
  );
};
