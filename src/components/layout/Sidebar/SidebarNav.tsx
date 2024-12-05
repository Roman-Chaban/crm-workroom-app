'use client';

import React, { type FC } from 'react';

import { usePathname } from 'next/navigation';

import { sidebarNav } from '@/staticData/sidebarNav';

import { SidebarNavItem } from '@/index/index';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

export const SidebarNav: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles['sidebarNav']}>
      <ul className={styles['sidebarNavList']}>
        {sidebarNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <SidebarNavItem
              key={item.id}
              item={item}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </nav>
  );
};
