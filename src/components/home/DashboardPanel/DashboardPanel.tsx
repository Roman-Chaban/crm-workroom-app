'use client';

import React, { useMemo, type FC } from 'react';

import { useParsedUserName } from '@/hooks/useParsedUserName';

import { Container, Div, Heading } from '@/index/index';

import styles from './DashboardPanel.module.scss';
import Image from 'next/image';

export const DashboardPanel: FC = () => {
  const sortedData = localStorage.getItem('registration');
  const userName = useParsedUserName(sortedData);

  const formatDateRange = useMemo(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const dateOptions: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };

    const formattedStart = start.toLocaleDateString('en-US', dateOptions);
    const formattedEnd = end.toLocaleDateString('en-US', dateOptions);

    return `${formattedStart} - ${formattedEnd}`;
  }, []);

  return (
    <Div className={styles['dashboard']}>
      <Container className={styles['dashboardContainer']}>
        {userName && (
          <span className={styles['dashboardGreetTitle']}>
            Welcome back, {userName}!
          </span>
        )}
        <Heading
          tag="h1"
          className={styles['dashboardTitle']}
        >
          Dashboard
        </Heading>
      </Container>
      <Div className={styles['dashboardDate']}>
        <Image
          src={'/icons/outlined-icons/calendar.svg'}
          alt="Calendar Icon"
          width={24}
          height={24}
        />
        <Heading
          tag="h5"
          className={styles['dashboardDateTitle']}
        >
          {formatDateRange}
        </Heading>
      </Div>
    </Div>
  );
};
