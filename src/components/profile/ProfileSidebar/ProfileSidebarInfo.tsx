'use client';

import React, { type FC } from 'react';

import Image from 'next/image';

import { Button, Container, Heading } from '@/index';

import styles from '@/styles/pages/Profile.module.scss';
import { useParsedUserName } from '@/hooks/useParsedUserName';

export const ProfileSidebarInfo: FC = () => {
  const profileUserName = useParsedUserName(
    localStorage.getItem('registration'),
  );

  return (
    <Container className={styles['profileSidebarInfo']}>
      <Heading
        tag="h4"
        className={styles['profileSidebarInfoTitle']}
      >
        {profileUserName}
      </Heading>

      <Button
        type="button"
        className={styles['profileSidebarInfoEditButton']}
      >
        <Image
          src={'/icons/outlined-icons/edit.svg'}
          alt="Edit Icon"
          width={24}
          height={24}
          className={styles['profileSidebarInfoEditIcon']}
        />
      </Button>
    </Container>
  );
};
