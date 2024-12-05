import React, { type FC } from 'react';

import Image from 'next/image';

import { StepsList } from '@/index/index';

import styles from './UserDetailsSidebar.module.scss';

interface UserDetailsSidebarProps {
  currentStep: number;
}

export const UserDetailsSidebar: FC<UserDetailsSidebarProps> = ({
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
