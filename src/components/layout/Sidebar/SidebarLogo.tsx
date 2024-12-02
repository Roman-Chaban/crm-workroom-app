import type { FC } from "react";

import Image from "next/image";

import styles from "@/components/layout/Sidebar/Sidebar.module.scss";

export const SidebarLogo: FC = () => {
  return (
    <div className={styles["sidebarLogo"]}>
      <Image
        src={"/icons/sidebar-icons/Logo.svg"}
        alt="Workroom Logo"
        width={50}
        height={50}
        priority
        className={styles["sidebarLogoIcon"]}
      />
    </div>
  );
};
