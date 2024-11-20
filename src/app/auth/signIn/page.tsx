import { Metadata } from 'next';

import { Section, SignInBanner, SignInForm } from '@/components/index/index';

import { container } from '@/classNames/signIn/signIn';

export const metadata: Metadata = {
  title: 'CRM Workroom | Sign In',
  icons: '/favicon/favicon.svg',
};

export default function SignInPage() {
  return (
    <Section className={container}>
      <SignInBanner />
      <SignInForm />
    </Section>
  );
}
