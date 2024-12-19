import React, { type FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Div, Heading } from '@/index';

import { NavViewProps } from '@/interfaces/NavViewInterface';

import styles from './NavView.module.scss';

export const NavView: FC<NavViewProps> = ({ title, link, href }) => {
  return (
    <Div className={styles['NavViewContainer']}>
      <Heading
        tag="h2"
        className={styles['NavViewTitle']}
      >
        {title}
      </Heading>
      <Link
        href={href}
        className={styles['NavViewLink']}
      >
        {link}{' '}
        <Image
          src={'/icons/projects-icons/arrow-right.svg'}
          alt="Arrow Icon"
          width={24}
          height={24}
        />
      </Link>
    </Div>
  );
};
