import { Metadata } from 'next';

import React from 'react';

import { Section, Nav } from '@/index';

import styles from '@/shared/styles/pages/calendar.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Calendar',
  icons: '/favicon/favicon.svg',
};

export default function CalendarPage() {
  return (
    <Section
      role="section"
      className={styles['calendar']}
    >
      <Nav
        role="nav"
        title="Calendar"
        buttonLabel="Add Event"
        isRenderBackLink={false}
      />
    </Section>
  );
}
