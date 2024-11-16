import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Nunito_Sans } from 'next/font/google';

import { BodyWrapper, Main } from '@/components/index/index';

import '@/styles/main/main.scss';
import { HomeClient } from '@/components/containers/HomeClient/HomeClient';

const basicFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  applicationName: 'CRM Workroom',
  title: 'CRM Workroom | Dashboard',
  icons: '/favicon/favicon.svg',
  authors: { name: 'Roman Chaban' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={basicFont.className}>
        <BodyWrapper>
          <HomeClient />
          <Main>{children}</Main>
        </BodyWrapper>
      </body>
    </html>
  );
}
