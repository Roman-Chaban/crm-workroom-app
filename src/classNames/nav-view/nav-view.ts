import classNames from "classnames";

import styles from "@/components/home/NavView/NavView.module.scss";

export const containerClassNames = {
  container: styles["NavViewContainer"],
  title: styles["NavViewTitle"],
  link: styles["NavViewLink"],
};

export const navViewContainer = classNames(containerClassNames.container);
export const navViewTitle = classNames(containerClassNames.title);
export const navViewLink = classNames(containerClassNames.link);
