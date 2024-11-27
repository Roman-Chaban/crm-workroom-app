import type { FC } from 'react';

import {
  Container,
  Section,
  MultiStepsSignUpAboutForm,
} from '@/components/index';

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
