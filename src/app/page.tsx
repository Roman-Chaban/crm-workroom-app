import { Metadata } from 'next';

import {
  Container,
  DashboardPanel,
  Box,
  Workload,
  NearestEvents,
  Projects,
  ActivityStream,
} from '@/components/index/index';

import { home, homeContainer } from '@/classNames/home/homeClassNames';

export const metadata: Metadata = {
  title: 'CRM Workroom | Home',
  icons: '/favicon/favicon.svg',
};

export default function HomePage() {
  return (
    <section className={home}>
      <Container className={homeContainer}>
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
    </section>
  );
}
