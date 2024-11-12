import type { FC } from 'react';

import Image from 'next/image';

import { Button } from '@/components/index/index';

import {
  logout,
  logoutButton,
  logoutImageBlock,
  supportButton,
} from '@/classNames/sidebar/sidebarClassNames';

export const SidebarLogout: FC = () => {
  return (
    <div className={logout}>
      <div className={logoutImageBlock}>
        <Image
          src={'/images/sidebar/support.svg'}
          alt="Support Image"
          width={168}
          height={214}
          priority
        />
        <Button type="button" className={supportButton}>
          <Image
            src={'/icons/sidebar-icons/chat-icon.svg'}
            alt="Support Image"
            width={24}
            height={24}
          />{' '}
          Support
        </Button>
      </div>
      <Button type="button" className={logoutButton}>
        <Image
          src={'/icons/sidebar-icons/logout.svg'}
          alt="Logout Icon"
          width={24}
          height={24}
        />{' '}
        Logout
      </Button>
    </div>
  );
};
