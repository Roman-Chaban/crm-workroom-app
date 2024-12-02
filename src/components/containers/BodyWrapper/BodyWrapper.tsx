"use client";

import type { FC, ReactNode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { client } from "@/shared/client/client";

import { Provider } from "react-redux";

import classNames from "classnames";

import { store } from "@/store/store";

import styles from "./BodyWrapper.module.scss";

interface BodyWrapperProps {
  children: ReactNode;
}

const position = "right";
const bodyWrapper = classNames(styles["bodyWrapper"]);

export const BodyWrapper: FC<BodyWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} position={position} />
        <div className={bodyWrapper}>{children}</div>
      </QueryClientProvider>
    </Provider>
  );
};
