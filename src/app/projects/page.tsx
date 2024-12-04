import React from 'react';

import type { Metadata } from 'next';

import { Section, Nav } from '@/components/index';

export const metadata: Metadata = {
  title: 'CRM Workroom | Projects',
  icons: '/favicon/favicon.svg',
};

export default function ProjectsPage() {
  return (
    <Section className="">
      <Nav
        title="Projects"
        buttonLabel="Add Project"
        isRenderBackLink={false}
      />
    </Section>
  );
}
