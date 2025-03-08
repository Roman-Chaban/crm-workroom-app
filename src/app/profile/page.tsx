import React from 'react';

import { Metadata } from 'next';

import {
  Heading,
  Section,
  ProfileSidebar,
  Grid,
  ProfileSettings,
} from '@/index';

import styles from '@/shared/styles/pages/profile.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Profile',
  icons: '/favicon/favicon.svg',
};

export default function ProfilePage() {
  return (
    <Section
      role="section"
      className={styles['profile']}
    >
      <Heading
        role="h1"
        tag="h1"
        className={styles['profileTitle']}
      >
        My Profile
      </Heading>

      <Grid
        role="container"
        className={styles['profileMainContainer']}
      >
        <ProfileSidebar />
        <ProfileSettings />
      </Grid>
    </Section>
  );
}
