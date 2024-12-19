import React, { type FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import classNames from 'classnames';

import { SidebarNavItemProps } from '@/interfaces/SidebarInterface';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({ item, isActive }) => {
  return (
    <li
      title={item.title}
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
