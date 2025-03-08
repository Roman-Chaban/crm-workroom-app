import React from 'react';

import type { Metadata } from 'next';

import { Section, SignInBanner, SignInForm } from '@/index/index';

import styles from '@/styles/pages/signIn.module.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom - Sign In',
};

export default function SignInPage() {
  return (
    <Section
      role="section"
      className={styles['signInContainer']}
    >
      <SignInBanner />
      <SignInForm />
    </Section>
  );
}
