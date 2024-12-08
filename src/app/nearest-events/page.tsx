'use client';

import React from 'react';

import { Nav, Section } from '@/index';

import { NAV_PATHS } from '@/enums/navPaths';

import styles from '@/styles/pages/nearest-events.module.scss';
import { useRouter } from 'next/navigation';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function NearestEventsPage() {
  const router = useRouter();

  useDocumentTitle('CRM Workroom - Nearest Events');

  const handleBackToDashBoard = () => {
    router.push(NAV_PATHS.DASHBOARD);
  };

  return (
    <Section className={styles['']}>
      <Nav
        isRenderBackLink
        buttonLabel="Add Event"
        title="Nearest Events"
        backButton={{
          linkLabel: 'Back to Dashboard',
          linkPath: NAV_PATHS.DASHBOARD,
        }}
        onBackClick={handleBackToDashBoard}
      />
    </Section>
  );
}
