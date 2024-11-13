import classNames from "classnames";

import styles from "@/components/home/Workload/Workload.module.scss";

export const containerClassNames = {
  workload: styles["workload"],
  workloadContainer: styles["workloadContainer"],
};

export const workload = classNames(containerClassNames.workload);
export const workloadContainer = classNames(
  containerClassNames.workloadContainer,
);
