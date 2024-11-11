import { Metadata } from 'next';

import { home, homeContainer } from '@/classNames/home/homeClassNames';

export const metadata: Metadata = {
  title: 'CRM Workroom | Home',
  icons: '/favicon/favicon.svg',
};

export default function Home() {
  return (
    <section className={home}>
      <div className={homeContainer}></div>
    </section>
  );
}
