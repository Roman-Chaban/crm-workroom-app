import React, {
  type FC,
  HTMLProps,
  ReactNode,
  TransitionEventHandler,
} from 'react';

interface BoxProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  onTransitionEnd?: TransitionEventHandler<HTMLDivElement>;
}

export const Box: FC<BoxProps> = ({ children, className, onTransitionEnd }) => {
  const boxCSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    gap: '1.875rem',
    justifyContent: 'space-between',
  };
  return (
    <div
      style={boxCSSProperties}
      className={className}
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </div>
  );
};
