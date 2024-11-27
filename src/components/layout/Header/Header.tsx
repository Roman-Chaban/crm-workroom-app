'use client';

import { ChangeEvent, useEffect, useMemo, useState, type FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Button, Container, Input, HeaderLogout } from '@/components/index';

import { Value } from '@/types/input';

import { NavPaths } from '@/enums/nav-paths';

import { IsRegistered, UserName } from '@/types/header';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [inputValue, setInputValue] = useState<Value>('');
  const [userName, setUserName] = useState<UserName>(null);
  const [isRegistered, setIsRegistered] = useState<IsRegistered>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const sortedData = localStorage.getItem('registration');
    if (sortedData) {
      try {
        const parsedData = JSON.parse(sortedData);
        if (parsedData && parsedData.password) {
          setUserName(parsedData.password || null);
          setIsRegistered(true);
        }
      } catch {
        console.error('Failed to parse registration data from localStorage.');
      }
    }
  }, []);

  const validateUserName = useMemo(() => {
    if (userName) {
      return userName.replace(/\./g, ' ').replace(/\d+/g, '');
    }
    return null;
  }, [userName]);

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
          {!isRegistered && (
            <Button type="button" className={styles['headerSignInButton']}>
              <Link href={NavPaths.SIGN_IN}>
                <Image
                  src="/icons/outlined-icons/add-user.svg"
                  alt="Notification Icon"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
          )}
          {isRegistered && <HeaderLogout validateUserName={validateUserName} />}
        </Container>
      </div>
    </header>
  );
};
