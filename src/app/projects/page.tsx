import React from 'react';

import type { Metadata } from 'next';

import { Nav, Grid, ProjectsSidebar, Section, Container } from '@/index/index';

import { ProjectsTasksNav } from '@/components/projects/ProjectsTasksNav/ProjectsTasksNav';

import styles from '@/styles/pages/projects.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Projects',
  icons: '/favicon/favicon.svg',
};

export default function ProjectsPage() {
  return (
    <Grid
      isSection
      gap="30px"
    >
      <Nav
        title="Projects"
        buttonLabel="Add Project"
        isRenderBackLink={false}
      />
      <Section className={styles['projects']}>
        <ProjectsSidebar />
        <Container className={styles['projectsContainer']}>
          <ProjectsTasksNav />
        </Container>
      </Section>
    </Grid>
  );
}
