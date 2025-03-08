import React, { type FC } from 'react';

import Image from 'next/image';

import { Button, Div } from '@/index';

import { SidebarProps } from '@/shared/interfaces/SidebarInterface';

import styles from '@/features/layout/Sidebar/Sidebar.module.scss';

export const SidebarLogout: FC<SidebarProps> = ({ onOpenModal }) => {
  return (
    <Div
      role="container"
      className={styles['sidebarLogout']}
    >
      <Div className={styles['sidebarLogoutBlock']}>
        <Image
          role="img"
          src={'/images/sidebar/support.svg'}
          alt="Support Image"
          width={168}
          height={214}
          priority
          className={styles['sidebarLogoutSupportImage']}
        />
        <Button
          role="button"
          type="button"
          className={styles['sidebarSupportButton']}
          onClick={onOpenModal}
        >
          <Image
            role="img"
            src={'/icons/sidebar-icons/chat-icon.svg'}
            alt="Support Image"
            width={24}
            height={24}
            className={styles['sidebarChatIcon']}
          />{' '}
          Support
        </Button>
      </Div>
    </Div>
  );
};
