import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { SidebarNavListItem } from '@/types/sidebar-nav';

import {
  navListItem,
  navListItemLink,
  navListItemIcon,
} from '@/classNames/sidebar/sidebarClassNames';

interface SidebarNavItemProps {
  item: SidebarNavListItem;
}

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item }) => {
  return (
    <li className={navListItem}>
      <Image
        src={item.inactiveIcon}
        alt={item.label}
        title={item.label}
        width={24}
        height={24}
        priority
        className={navListItemIcon}
      />
      <Link href={item.href} className={navListItemLink}>
        {item.label}
      </Link>
    </li>
  );
};
