import { Metadata } from 'next';

import React from 'react';

import { Section, Nav, InfoPortalMain } from '@/index/index';

import styles from '@/styles/pages/infoPortal.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Info Portal',
  icons: '/favicon/favicon.svg',
};

export default function InfoPortalPage() {
  return (
    <Section className={styles['infoPortal']}>
      <Nav
        title="Info Portal"
        buttonLabel="Add Folder"
        isRenderBackLink={false}
      />
      <InfoPortalMain />
    </Section>
  );
}
