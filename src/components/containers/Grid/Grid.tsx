import React, { type FC, type ReactNode, type CSSProperties } from 'react';

interface GridProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  display?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: string;
  children: ReactNode;
  isSection?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  tag?: 'table' | 'div' | 'section' | 'article';
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  justifyContent?: string;
  className?: string;
  gridColumn?: string;
  justifyItems?: string;
}

export const Grid: FC<GridProps> = ({
  display = 'grid',
  height = '',
  width = '100%',
  maxWidth = '100%',
  gap = '',
  tag = 'div',
  gridTemplateColumns = 'repeat(12, 1fr)',
  gridTemplateRows = '',
  children,
  backgroundColor = '',
  boxShadow = '',
  borderRadius = '',
  isSection = false,
  position = 'static',
  gridColumn = '',
  className,
  justifyContent = 'start',
  justifyItems = '',
}) => {
  const gridStyles: CSSProperties = {
    width,
    maxWidth,
    height,
    display,
    backgroundColor,
    boxShadow,
    borderRadius,
    gridTemplateColumns,
    gridTemplateRows,
    gap,
    position,
    gridColumn,
    justifyContent,
    justifyItems,
  };

  const Tag = tag || (isSection ? 'section' : 'div');

  return (
    <Tag
      style={gridStyles}
      className={className}
    >
      {children}
    </Tag>
  );
};
