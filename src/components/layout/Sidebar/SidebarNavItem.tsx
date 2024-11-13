import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { SidebarNavListItem } from '@/types/sidebar-nav';

import classNames from 'classnames';

import {
  navListItem,
  navListItemLink,
  navListItemIcon,
  isActiveLink,
  isActiveColor,
} from '@/classNames/sidebar/sidebarClassNames';

interface SidebarNavItemProps {
  item: SidebarNavListItem;
  isActive: boolean;
}

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item, isActive }) => {
  return (
    <li className={classNames(navListItem, { [isActiveLink]: isActive })}>
      <Image
        src={isActive ? item.activeIcon : item.inactiveIcon}
        alt={item.label}
        title={item.label}
        width={24}
        height={24}
        priority
        className={navListItemIcon}
      />
      <Link
        href={item.href}
        className={classNames(navListItemLink, { [isActiveColor]: isActive })}
      >
        {item.label}
      </Link>
    </li>
  );
};
