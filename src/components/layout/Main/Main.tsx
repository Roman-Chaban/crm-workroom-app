import type { FC, ReactNode } from "react";

import { Header, Grid } from "@/components/index/index";

import { main } from "@/classNames/main/mainClassNames";

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <Grid gridTemplateRows="auto 1fr" gap="50px">
      <Header />
      <main className={main}>{children}</main>
    </Grid>
  );
};
