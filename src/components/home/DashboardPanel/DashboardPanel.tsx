import type { FC } from 'react';

import { Container } from '@/components/index/index';

import styles from './DashboardPanel.module.scss';

export const DashboardPanel: FC = () => {
  return (
    <div className={styles['dashboard']}>
      <Container className={styles['dashboardContainer']}>
        <span className={styles['dashboardGreetTitle']}>
          Welcome back, Evan!
        </span>
        <h1 className={styles['dashboardTitle']}>Dashboard</h1>
      </Container>
    </div>
  );
};
