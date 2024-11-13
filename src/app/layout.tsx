import React from "react";

import type { Metadata } from "next";

import { Nunito_Sans } from "next/font/google";

import { Sidebar, BodyWrapper, Main } from "@/components/index/index";

import "@/styles/main/main.scss";

const basicFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CRM Workroom | Dashboard",
  icons: "/favicon/favicon.svg",
  authors: { name: "Roman Chaban" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={basicFont.className}>
        <BodyWrapper>
          <Sidebar />
          <Main>{children}</Main>
        </BodyWrapper>
      </body>
    </html>
  );
}
