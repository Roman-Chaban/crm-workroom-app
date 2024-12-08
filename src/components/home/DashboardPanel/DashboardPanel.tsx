'use client';

import React, { type FC } from 'react';

import { useParsedUserName } from '@/hooks/useParsedUserName';

import { Container, Div, Heading } from '@/index/index';

import styles from './DashboardPanel.module.scss';

export const DashboardPanel: FC = () => {
  const sortedData = localStorage.getItem('registration');
  const userName = useParsedUserName(sortedData);

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
    </Div>
  );
};
