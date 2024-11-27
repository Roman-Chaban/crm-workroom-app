'use client';

import { useEffect, useState, type FC } from 'react';

import { Container } from '@/components/index/index';

import styles from './DashboardPanel.module.scss';

export const DashboardPanel: FC = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const sortedData = localStorage.getItem('registration');
    if (sortedData) {
      const parsedUserName = JSON.parse(sortedData);
      if (parsedUserName && parsedUserName.password) {
        const validUserName = parsedUserName.password
          .replace(/\./g, ' ')
          .replace(/\d+/g, '');
        setUserName(validUserName || null);
      }
    }
  }, []);

  return (
    <div className={styles['dashboard']}>
      <Container className={styles['dashboardContainer']}>
        {userName && (
          <span className={styles['dashboardGreetTitle']}>
            Welcome back, {userName}!
          </span>
        )}
        <h1 className={styles['dashboardTitle']}>Dashboard</h1>
      </Container>
    </div>
  );
};
