import React, { type ReactNode } from 'react';

import type { Metadata } from 'next';

import { Nunito_Sans } from 'next/font/google';

import { BodyWrapper } from '@/index';

import { SidebarRender } from '@/features/containers/SidebarRender/SidebarRender';

import { MainRender } from '@/features/containers/MainRender/MainRender';

import '@/shared/styles/main/main.scss';

const basicFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  applicationName: 'CRM Workroom',
  description:
    'Workflow CRM is a powerful Customer Relationship Management system designed to streamline sales processes, enhance customer service, and facilitate project management.',
  title: 'CRM Workroom - Dashboard',
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
