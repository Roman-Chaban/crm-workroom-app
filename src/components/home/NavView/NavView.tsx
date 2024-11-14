import type { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  navViewContainer,
  navViewLink,
  navViewTitle,
} from "@/classNames/nav-view/nav-viewClassNames";

interface NavViewProps {
  props: {
    title: string;
    link: string;
  };
}

export const NavView: FC<NavViewProps> = ({ props }) => {
  return (
    <div className={navViewContainer}>
      <h2 className={navViewTitle}>{props.title}</h2>
      <Link href={"/"} className={navViewLink}>
        {props.link}{" "}
        <Image
          src={"/icons/projects-icons/arrow-right.svg"}
          alt="Arrow Icon"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};
