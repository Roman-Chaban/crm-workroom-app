import { Metadata } from 'next';

import { Section, SignInBanner, SignInForm } from '@/components/index/index';

export const metadata: Metadata = {
  title: 'CRM Workroom | Sign In',
  icons: '/favicon/favicon.svg',
};

export default function SignInPage() {
  return (
    <Section className={''}>
      <SignInBanner />
      <SignInForm />
    </Section>
  );
}
