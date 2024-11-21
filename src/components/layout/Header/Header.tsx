'use client';

import { ChangeEvent, useState, type FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Button, Container, Input } from '@/components/index';

import { Value } from '@/types/input';

import { SidebarNavPaths } from '@/enums/nav-paths';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [inputValue, setInputValue] = useState<Value>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <header className={styles['header']}>
      <div className={styles['headerContainer']}>
        <Input
          icon="/icons/outlined-icons/search.svg"
          onChange={handleInputChange}
          value={inputValue}
          htmlFor="search"
          label=""
          id="search"
          type="search"
          name="search"
          placeholder="Search"
          classNames={{
            input: styles['headerSearchInput'],
            container: styles['headerSearchContainer'],
            label: styles['headerSearchLabel'],
          }}
        />
        <Container className={styles['headerButtonsContainer']}>
          <Button type="button" className={styles['headerNotification']}>
            <Image
              src="/icons/outlined-icons/notification.svg"
              alt="Notification Icon"
              width={24}
              height={24}
            />
          </Button>
          <Button type="button" className={styles['headerSignInButton']}>
            <Link href={SidebarNavPaths.MULTI_STEP_SIGN_IN}>
              <Image
                src="/icons/outlined-icons/add-user.svg"
                alt="Notification Icon"
                width={24}
                height={24}
              />
            </Link>
          </Button>
        </Container>
      </div>
    </header>
  );
};
