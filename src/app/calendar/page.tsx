import { Metadata } from 'next';

import React from 'react';

import { Section, Nav } from '@/index/index';

import styles from '@/styles/pages/calendar.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Calendar',
  icons: '/favicon/favicon.svg',
};

export default function CalendarPage() {
  return (
    <Section className={styles['calendar']}>
      <Nav
        title="Calendar"
        buttonLabel="Add Event"
        isRenderBackLink={false}
      />
    </Section>
  );
}
