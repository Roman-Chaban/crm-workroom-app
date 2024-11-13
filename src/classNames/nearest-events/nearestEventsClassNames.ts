import classNames from "classnames";

import styles from "@/components/home/NearestEvents/NearestEvents.module.scss";

export const containerClassNames = {
  nearestEvents: styles["nearestEvents"],
  nearestEventsContainer: styles["nearestEventsContainer"],
};

export const nearestEvents = classNames(containerClassNames.nearestEvents);
export const nearestEventsContainer = classNames(
  containerClassNames.nearestEventsContainer,
);
