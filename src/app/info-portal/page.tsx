import { Metadata } from 'next';

import React from 'react';

import { Section, Nav, InfoPortalMain } from '@/index';

import styles from '@/shared/styles/pages/infoPortal.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Info Portal',
  icons: '/favicon/favicon.svg',
};

export default function InfoPortalPage() {
  return (
    <Section
      role="section"
      className={styles['infoPortal']}
    >
      <Nav
        role="nav"
        title="Info Portal"
        buttonLabel="Add Folder"
        isRenderBackLink={false}
      />
      <InfoPortalMain />
    </Section>
  );
}
