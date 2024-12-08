import React, { type FC } from 'react';

import Image from 'next/image';

import { Aside, Div, Heading, StepsList } from '@/index/index';

import styles from './UserDetailsSidebar.module.scss';

interface UserDetailsSidebarProps {
  currentStep: number;
}

export const UserDetailsSidebar: FC<UserDetailsSidebarProps> = ({
  currentStep,
}) => {
  return (
    <Aside className={styles['sidebarSteps']}>
      <Div className={styles['sidebarStepsContainer']}>
        <Image
          src={'/images/auth/icons/signIn-logo.svg'}
          alt="Workroom Logo"
          width={60}
          height={60}
          priority
        />

        <Div className={styles['sidebarStepsGetStarted']}>
          <Heading
            tag="h4"
            className={styles['sidebarStepsGetStartedTitle']}
          >
            Get started
          </Heading>
          <StepsList currentStep={currentStep} />
        </Div>
      </Div>
    </Aside>
  );
};
