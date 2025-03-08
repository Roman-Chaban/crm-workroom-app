'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';

import { Nav, Section, EventModal } from '@/index';

import { NAV_PATHS } from '@/shared/enums/navPaths';

type isEventModalOpenType = boolean;

export default function NearestEventsPage() {
  const [isEventModalOpen, setIsEventModalOpen] =
    useState<isEventModalOpenType>(false);

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
    <Section role="section">
      <Nav
        role="nav"
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
