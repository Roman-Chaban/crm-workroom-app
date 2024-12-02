import type { FC } from "react";

import { NavView } from "@/components/home/NavView/NavView";

import styles from "@/components/home/Workload/Workload.module.scss";

export const Workload: FC = () => {
  return (
    <div className={styles["workload"]}>
      <div className={styles["workloadContainer"]}>
        <NavView props={{ link: "View all", title: "Workload" }} />
      </div>
    </div>
  );
};
