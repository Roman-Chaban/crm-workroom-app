import type { FC } from 'react';

import { nav, navList } from '@/classNames/sidebar/sidebarClassNames';

import { sidebarNav } from '@/static-data/sidebar-nav';

import { SidebarNavItem } from '@/components/index/index';

export const SidebarNav: FC = () => {
  return (
    <nav className={nav}>
      <ul className={navList}>
        {sidebarNav.map((item) => (
          <SidebarNavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};
