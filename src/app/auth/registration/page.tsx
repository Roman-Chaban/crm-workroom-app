import type { Metadata } from 'next';

import { MultiStepSignUpEntering } from '@/components/auth/MultiStepSignUp/MultiStepsSignUpEntering';
import { MultiStepsSignUpBanner } from '@/components/auth/MultiStepSignUp/MultiStepsSignUpBanner';
import { Container } from '@/components/index';

export const metadata: Metadata = {
  title: 'Sign Up | Step 1',
  icons: '/favicon/favicon.svg',
};

export default function MultiStepSignUpPage() {
  return (
    <Container>
      <MultiStepsSignUpBanner />
      <MultiStepSignUpEntering />
    </Container>
  );
}
