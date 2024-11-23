import type { FC } from 'react';

import Image from 'next/image';

import { StepsList } from '@/components/index/index';

import styles from './MultiStepsSignUpSidebar.module.scss';

interface MultiStepsSignUpSidebarProps {
  currentStep: number;
}

export const MultiStepsSignUpSidebar: FC<MultiStepsSignUpSidebarProps> = ({
  currentStep,
}) => {
  return (
    <aside className={styles['sidebarSteps']}>
      <div className={styles['sidebarStepsContainer']}>
        <Image
          src={'/images/auth/icons/signIn-logo.svg'}
          alt="Workroom Logo"
          width={60}
          height={60}
          priority
        />
        <div className={styles['sidebarStepsGetStarted']}>
          <h4 className={styles['sidebarStepsGetStartedTitle']}>Get started</h4>
          <StepsList currentStep={currentStep} />
        </div>
      </div>
    </aside>
  );
};
