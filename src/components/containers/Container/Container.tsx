import React, {
  CSSProperties,
  type FC,
  ForwardedRef,
  HTMLProps,
  ReactNode,
} from 'react';

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
  style?: CSSProperties;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ref,
  style,
}) => {
  return (
    <div
      className={className}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  );
};
