import React, { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Nunito_Sans } from 'next/font/google';

import { BodyWrapper } from '@/components/index/index';

import { SidebarRender } from '@/components/containers/SidebarRender/SidebarRender';

import '@/styles/main/main.scss';
import { MainRender } from '@/components/containers/MainRender/MainRender';

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
          <SidebarRender />
          <MainRender>{children}</MainRender>
        </BodyWrapper>
      </body>
    </html>
  );
}
