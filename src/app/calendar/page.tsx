import React from 'react';

import { Section, Nav } from '@/components/index';

import styles from '@/styles/pages/calendar.module.scss';

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
