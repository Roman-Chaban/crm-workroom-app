'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import { Nav, Section, EventModal } from '@/index';

import { NAV_PATHS } from '@/enums/navPaths';

import styles from '@/styles/pages/nearest-events.module.scss';

export default function NearestEventsPage() {
  const [isEventModalOpen, setIsEventModalOpen] = useState<boolean>(false);

  const router = useRouter();

  useDocumentTitle('CRM Workroom - Nearest Events');

  const handleBackToDashBoard = () => {
    router.push(NAV_PATHS.DASHBOARD);
  };

  const handleOpenEventModal = () => {
    setIsEventModalOpen(true);
  };

  const handleCloseEventModal = () => {
    setIsEventModalOpen(false);
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
        onClick={handleOpenEventModal}
      />

      <EventModal
        isOpen={isEventModalOpen}
        onCloseModal={handleCloseEventModal}
      />
    </Section>
  );
}
