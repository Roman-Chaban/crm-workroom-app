import type { FC } from "react";

import { NavView } from "@/components/home/NavView/NavView";

import {
  workload,
  workloadContainer,
} from "@/classNames/workload/workloadClassNames";

export const Workload: FC = () => {
  return (
    <div className={workload}>
      <div className={workloadContainer}>
        <NavView props={{ link: "View all", title: "Workload" }} />
      </div>
    </div>
  );
};
