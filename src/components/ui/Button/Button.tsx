import React, {
  HTMLProps,
  type CSSProperties,
  type FC,
  type ReactNode,
} from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, ''> {
  children: ReactNode;
  className?: string;
  type: ButtonType;
  disabled?: boolean;
  style?: CSSProperties;
  ariaPressed?: boolean;
  id?: string;
  ariaLabel?: string;
  title?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  style,
  className,
  disabled,
  ariaPressed,
  ariaLabel,
  title,
  id,
  onClick,
}) => {
  return (
    <button
      data-id={id}
      style={style}
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      title={title}
    >
      {children}
    </button>
  );
};
