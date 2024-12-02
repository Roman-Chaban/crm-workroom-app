import { StylesConfig } from "react-select";

import { keyframes } from "@emotion/react";

import { Option } from "@/interfaces/select";

import { colors } from "@/constants/colors";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customStyles: StylesConfig<Option, false> = {
  container: (base) => ({
    ...base,
    width: "100%",
    maxWidth: "403px",
    display: "flex",
    flexDirection: "column",
    marginBlockStart: 0,
    position: "relative",
    animation: `${fadeIn} 0.3s ease-in-out`,
  }),
  control: (base) => ({
    ...base,
    border: `2px solid ${colors.backgroundModalLight}`,
    boxShadow: colors.shadowModal,
    borderRadius: 14,
    minHeight: 49,
    cursor: "pointer",
    transition: "all 0.3s",
    ":hover": {
      borderColor: colors.backgroundSupportHover,
      outline: `2px solid rgba(${colors.backgroundSupportPrimary}, 0.11)`,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
    fontSize: 14,
    lineHeight: "171%",
    transition: "opacity 0.3s",
    fontWeight: 400,
  }),
  menu: (base) => ({
    ...base,
    animation: `${fadeIn} 0.3s ease-in-out`,
    opacity: 0,
    animationFillMode: "forwards",
    borderRadius: 14,
    boxShadow: colors.shadowBoxLight,
    background: colors.colorWhitePrimary,
    border: `2px solid ${colors.backgroundModalLight}`,
    maxHeight: "240px",
    overflowY: "auto",
    scrollbarWidth: "none",
  }),

  option: (base) => ({
    ...base,
    cursor: "pointer",
    fontWeight: 500,
    ":hover": {
      fontWeight: 700,
      color: colors.colorBlackDeep,
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
    fontWeight: 400,
    paddingInlineStart: 10,
    animation: `${fadeIn} 0.3s ease-in-out`,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    paddingInlineEnd: 10,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: colors.colorGrayNeutral,
    transition: "transform 0.3s ease, color 0.3s ease",
    ":hover": {
      color: colors.backgroundSupportHover,
      transform: "rotate(180deg)",
    },
  }),

  input: (base) => ({
    ...base,
    display: "none",
  }),
};

export default customStyles;
