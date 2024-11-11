import type { Metadata } from 'next';

import { Sidebar, BodyWrapper, Main } from '@/components/index/index';

import '@/styles/main/main.scss';

export const metadata: Metadata = {
  title: 'CRM Workroom | Dashboard',
  icons: '/favicon/favicon.svg',
  authors: { name: 'Roman Chaban' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BodyWrapper>
          <Sidebar />
          <Main>{children}</Main>
        </BodyWrapper>
      </body>
    </html>
  );
}
