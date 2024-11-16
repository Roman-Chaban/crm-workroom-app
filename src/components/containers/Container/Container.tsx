import { FC, ForwardedRef, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
}

export const Container: FC<ContainerProps> = ({ children, className, ref }) => {
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};
