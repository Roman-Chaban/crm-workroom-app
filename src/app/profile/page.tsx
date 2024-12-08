import React from 'react';

import { Metadata } from 'next';

import { Section } from '@/index';

export const metadata: Metadata = {
  title: 'CRM Workroom - Profile',
  icons: '/favicon/favicon.svg',
};

export default function ProfilePage() {
  return <Section className="">ProfilePage</Section>;
}
