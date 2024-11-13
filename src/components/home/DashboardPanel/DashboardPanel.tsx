import type { FC } from "react";

import { Container } from "@/components/containers/Container/Container";

import {
  dashboard,
  dashboardContainer,
  greetTitle,
  title,
} from "@/classNames/dashboard-panel/dashboardPanelClassNames";

export const DashboardPanel: FC = () => {
  return (
    <div className={dashboard}>
      <Container className={dashboardContainer}>
        <span className={greetTitle}>Welcome back, Evan!</span>
        <h1 className={title}>Dashboard</h1>
      </Container>
    </div>
  );
};
