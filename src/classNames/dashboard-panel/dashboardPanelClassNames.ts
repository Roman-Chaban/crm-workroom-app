import classNames from "classnames";

import styles from "@/components/home/DashboardPanel/DashboardPanel.module.scss";

export const containerClassNames = {
  dashBoard: styles["dashboard"],
  container: styles["dashboardContainer"],
  greetTitle: styles["dashboardGreetTitle"],
  title: styles["dashboardTitle"],
};

export const dashboard = classNames(containerClassNames.dashBoard);
export const dashboardContainer = classNames(containerClassNames.container);
export const greetTitle = classNames(containerClassNames.greetTitle);
export const title = classNames(containerClassNames.title);
