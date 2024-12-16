import React, { HTMLProps, type FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button, Container, Div } from '@/index/index';

import styles from './Nav.module.scss';

interface NavProps extends HTMLProps<HTMLElement> {
  title: string;
  buttonLabel: string;
  isRenderBackLink: boolean;
  onBackClick?: () => void;
  onClick?: () => void;
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
  onClick,
  onBackClick,
}) => {
  return (
    <nav className={styles['nav']}>
      <Container className={styles['navContainer']}>
        <Div className={styles['navTop']}>
          {isRenderBackLink && (
            <Button
              type="button"
              onClick={onBackClick}
              className={styles['navBackButton']}
            >
              <Link
                href={backButton.linkPath}
                className={styles['navBackLink']}
              >
                {backButton.linkLabel}
              </Link>
            </Button>
          )}
          <h1 className={styles['navTitle']}>{title}</h1>
        </Div>
        <Button
          type="button"
          className={styles['navButton']}
          onClick={onClick}
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
