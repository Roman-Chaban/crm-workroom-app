import { StylesConfig } from 'react-select';
import { keyframes } from '@emotion/react';

import { Option } from '@/interfaces/select';
import { themeColors } from '@/constants/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const customStyles: StylesConfig<Option, false> = {
  container: (base) => ({
    ...base,
    display: 'flex',
    flexDirection: 'column',
    marginBlockStart: '32px',
    position: 'relative',
    animation: `${fadeIn} 0.3s ease-in-out`,
  }),
  control: (base) => ({
    ...base,
    border: `2px solid ${themeColors.backgroundModalLight}`,
    boxShadow: themeColors.shadowModal,
    borderRadius: 14,
    minHeight: 49,
    cursor: 'pointer',
    transition: 'all 0.3s',
    ':hover': {
      borderColor: themeColors.backgroundSupportHover,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: themeColors.colorGrayNeutral,
    fontSize: 14,
    lineHeight: '171%',
    transition: 'opacity 0.3s',
  }),
  menu: (base) => ({
    ...base,
    animation: `${fadeIn} 0.3s ease-in-out`,
    opacity: 0,
    animationFillMode: 'forwards',
    borderRadius: 14,
    boxShadow: themeColors.shadowBoxLight,
    background: themeColors.colorWhitePrimary,
    border: `2px solid ${themeColors.backgroundModalLight}`,
    maxHeight: '240px',
    overflowY: 'auto',
    scrollbarWidth: 'none',
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (base) => ({
    ...base,
    padding: '11px',
    color: themeColors.colorGrayNeutral,
    fontSize: 16,
    margin: 10,
    maxWidth: '95%',
    borderRadius: 14,
    lineHeight: '171%',
    background: themeColors.colorWhitePrimary,
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    ':hover': {
      backgroundColor: themeColors.optionBackground,
      color: themeColors.colorBlackDeep,
      fontWeight: 700,
    },
    ':active': {
      backgroundColor: themeColors.backgroundSupportActive,
      color: themeColors.colorWhitePrimary,
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: themeColors.colorGrayNeutral,
    animation: `${fadeIn} 0.3s ease-in-out`,
  }),
};

export default customStyles;
