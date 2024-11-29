import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { SidebarNavListItem } from '@/types/sidebarNav';

import classNames from 'classnames';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

interface SidebarNavItemProps {
  item: SidebarNavListItem;
  isActive: boolean;
}

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item, isActive }) => {
  return (
    <li
      className={classNames(styles['sidebarNavListItem'], {
        [styles['sidebarNavListItemActive']]: isActive,
      })}
    >
      <Image
        src={isActive ? item.activeIcon : item.inactiveIcon}
        alt={item.label}
        title={item.label}
        width={24}
        height={24}
        priority
        className={styles['sidebarNavListItemIcon']}
      />
      <Link
        href={item.href}
        className={classNames(styles['sidebarNavListItemLink'], {
          [styles['activeColor']]: isActive,
        })}
      >
        {item.label}
      </Link>
    </li>
  );
};
