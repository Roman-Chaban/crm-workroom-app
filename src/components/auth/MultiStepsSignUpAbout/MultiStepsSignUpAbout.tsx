import type { FC } from 'react';

import { Container, Section } from '@/components/index';

import { MultiStepsSignUpAboutForm } from './MultiStepsSignUpAboutForm';

import styles from './MultiStepsSignUpAbout.module.scss';

export const MultiStepsSignUpAbout: FC = () => {
  return (
    <Section className={styles['MultiStepsSignUpAbout']}>
      <Container className={styles['MultiStepsSignUpAboutContainer']}>
        <MultiStepsSignUpAboutForm />
      </Container>
    </Section>
  );
};
