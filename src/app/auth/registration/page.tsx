import {
  Container,
  MultiStepSignUpEntering,
  MultiStepsSignUpSidebar,
} from '@/components/index';

import styles from '@/styles/pages/signIn.module.scss';

export default function MultiStepsSignUpPage() {
  return (
    <Container className={styles['signUpSteps']}>
      <MultiStepsSignUpSidebar />
      <MultiStepSignUpEntering />
    </Container>
  );
}
