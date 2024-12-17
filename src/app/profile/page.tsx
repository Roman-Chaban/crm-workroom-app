import React from 'react';

import { Metadata } from 'next';

import {
  Heading,
  Section,
  ProfileSidebar,
  Grid,
  ProfileSettings,
} from '@/index';

import styles from '@/styles/pages/profile.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Profile',
  icons: '/favicon/favicon.svg',
};

export default function ProfilePage() {
  return (
    <Section className={styles['profile']}>
      <Heading
        tag="h1"
        className={styles['profileTitle']}
      >
        My Profile
      </Heading>

      <Grid className={styles['profileMainContainer']}>
        <ProfileSidebar />
        <ProfileSettings />
      </Grid>
    </Section>
  );
}
