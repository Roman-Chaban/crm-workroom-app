import React, { type FC } from 'react';

import Image from 'next/image';

import { Button, Div } from '@/index/index';

import { SidebarProps } from '@/interfaces/SidebarInterface';

import styles from '@/components/layout/Sidebar/Sidebar.module.scss';

export const SidebarLogout: FC<SidebarProps> = ({ onOpenModal }) => {
  return (
    <Div className={styles['sidebarLogout']}>
      <Div className={styles['sidebarLogoutBlock']}>
        <Image
          src={'/images/sidebar/support.svg'}
          alt="Support Image"
          width={168}
          height={214}
          priority
        />
        <Button
          type="button"
          className={styles['sidebarSupportButton']}
          onClick={onOpenModal}
        >
          <Image
            src={'/icons/sidebar-icons/chat-icon.svg'}
            alt="Support Image"
            width={24}
            height={24}
          />{' '}
          Support
        </Button>
      </Div>
    </Div>
  );
};
