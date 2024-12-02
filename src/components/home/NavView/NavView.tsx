import React, { type FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './NavView.module.scss';

interface NavViewProps {
  props: {
    title: string;
    link: string;
  };
}

export const NavView: FC<NavViewProps> = ({ props }) => {
  return (
    <div className={styles['NavViewContainer']}>
      <h2 className={styles['NavViewTitle']}>{props.title}</h2>
      <Link
        href={'/'}
        className={styles['NavViewLink']}
      >
        {props.link}{' '}
        <Image
          src={'/icons/projects-icons/arrow-right.svg'}
          alt="Arrow Icon"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};
