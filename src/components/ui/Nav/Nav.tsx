import React, { type FC } from 'react';

import { Button, Container } from '@/index/index';

import Image from 'next/image';
import Link from 'next/link';

import styles from './Nav.module.scss';

interface NavProps {
  title: string;
  buttonLabel: string;
  isRenderBackLink: boolean;
  onBackClick?: () => void;
  backButton?: {
    linkPath: string;
    linkLabel: string;
  };
}

export const Nav: FC<NavProps> = ({
  title,
  buttonLabel,
  isRenderBackLink,
  backButton = { linkLabel: '', linkPath: '' },
  onBackClick,
}) => {
  return (
    <nav className={styles['nav']}>
      <Container className={styles['navContainer']}>
        {isRenderBackLink && (
          <Button
            type="button"
            onClick={onBackClick}
          >
            <Link href={backButton.linkPath}>{backButton.linkLabel}</Link>
          </Button>
        )}
        <h1 className={styles['navTitle']}>{title}</h1>
        <Button
          type="button"
          className={styles['navButton']}
        >
          <Image
            src={'/icons/projects-icons/add.svg'}
            alt="Add Icon"
            width={24}
            height={24}
          />
          {buttonLabel}
        </Button>
      </Container>
    </nav>
  );
};
