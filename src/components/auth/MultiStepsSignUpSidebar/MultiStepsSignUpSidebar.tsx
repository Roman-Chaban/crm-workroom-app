import type { FC } from 'react';

import Image from 'next/image';

import styles from './MultiStepsSignUpSidebar.module.scss';

import { StepsList } from './StepsList';

export const MultiStepsSignUpSidebar: FC = () => {
  return (
    <aside className={styles['sidebarSteps']}>
      <div className={styles['sidebarStepsContainer']}>
        <Image
          src={'/images/auth/icons/signIn-logo.svg'}
          alt="Workroom Logo"
          width={50}
          height={50}
          priority
        />
        <div className={styles['sidebarStepsGetStarted']}>
          <h4 className={styles['sidebarStepsGetStartedTitle']}>Get started</h4>
          <StepsList />
        </div>
      </div>
    </aside>
  );
};
