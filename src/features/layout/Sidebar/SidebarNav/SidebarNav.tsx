'use client';

import React, { type FC } from 'react';

import { usePathname } from 'next/navigation';

import { SidebarNavItem } from '@/index';

import { sidebarNav } from '@/shared/assets/static/SidebarNav';

import styles from '@/features/layout/Sidebar/Sidebar.module.scss';

export const SidebarNav: FC = () => {
  const pathname = usePathname();

  return (
    <nav
      role="nav"
      className={styles['sidebarNav']}
    >
      <ul
        role="list"
        className={styles['sidebarNavList']}
      >
        {sidebarNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <SidebarNavItem
              role="listItem"
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
