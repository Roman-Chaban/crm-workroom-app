import { Metadata } from 'next';

import React from 'react';

import { Section, Nav } from '@/components/index';

export const metadata: Metadata = {
  title: 'CRM Workroom - Info Portal',
  icons: '/favicon/favicon.svg',
};

export default function InfoPortalPage() {
  return (
    <Section className="">
      <Nav
        title="Info Portal"
        buttonLabel="Add Folder"
        isRenderBackLink={false}
      />
    </Section>
  );
}
