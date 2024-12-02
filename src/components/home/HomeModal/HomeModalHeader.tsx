import { type FC } from "react";

import { Button } from "@/components/index";

import Image from "next/image";

import styles from "./HomeModal.module.scss";

interface HomeModalHeaderProps {
  onCloseModal: () => void;
}

export const HomeModalHeader: FC<HomeModalHeaderProps> = ({ onCloseModal }) => {
  return (
    <div className={styles["modalHeader"]}>
      <h3 className={styles["modalHeaderTitle"]}>Need some Help?</h3>
      <Button
        type="button"
        onClick={onCloseModal}
        className={styles["modalHeaderButton"]}
      >
        <Image
          src="/icons/outlined-icons/close.svg"
          alt="Close Icon"
          width={24}
          height={24}
          className={styles["modalCloseIcon"]}
        />
      </Button>
    </div>
  );
};
