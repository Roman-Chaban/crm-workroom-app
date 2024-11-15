import { Metadata } from 'next';

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

import { home, homeContainer } from '@/classNames/home/home';

export const metadata: Metadata = {
  title: 'CRM Workroom | Dashboard',
  icons: '/favicon/favicon.svg',
};

export default function HomePage() {
  return (
    <Section className={home}>
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
    </Section>
  );
}
