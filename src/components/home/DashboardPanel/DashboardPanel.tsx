'use client';

import React, { type FC } from 'react';

import { useParsedUserName } from '@/hooks/useParsedUserName';

import { Container } from '@/index/index';

import styles from './DashboardPanel.module.scss';

export const DashboardPanel: FC = () => {
  const sortedData = localStorage.getItem('registration');
  const userName = useParsedUserName(sortedData);

  return (
    <div className={styles['dashboard']}>
      <Container className={styles['dashboardContainer']}>
        {userName && (
          <span className={styles['dashboardGreetTitle']}>Welcome back, {userName}!</span>
        )}
        <h1 className={styles['dashboardTitle']}>Dashboard</h1>
      </Container>
    </div>
  );
};
