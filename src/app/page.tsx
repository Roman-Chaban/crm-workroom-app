import React from 'react';
import type { Metadata } from 'next';

import {
  Container,
  DashboardPanel,
  Box,
  Workload,
  NearestEvents,
  Projects,
  ActivityStream,
  Section,
} from '@/components/index/index';

import styles from '@/styles/pages/home.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Dashboard',
  icons: '/favicon/favicon.svg',
};

export default function HomePage() {
  return (
    <Section className={styles['home']}>
      <Container className={styles['homeContainer']}>
        <DashboardPanel />
        <Box>
          <Workload />
          <NearestEvents />
        </Box>
        <Box>
          <Projects />
          <ActivityStream />
        </Box>
      </Container>
    </Section>
  );
}
