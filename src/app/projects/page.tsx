import React from 'react';

import type { Metadata } from 'next';

import {
  Nav,
  Grid,
  ProjectsSidebar,
  Section,
  RenderProjectsActive,
} from '@/index';

import styles from '@/shared/styles/pages/projects.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Projects',
  icons: '/favicon/favicon.svg',
};

export default function ProjectsPage() {
  return (
    <Grid
      role="section"
      isSection
      gap="30px"
    >
      <Nav
        role="nav"
        title="Projects"
        buttonLabel="Add Project"
        isRenderBackLink={false}
      />
      <Section className={styles['projects']}>
        <ProjectsSidebar />
        <RenderProjectsActive />
      </Section>
    </Grid>
  );
}
