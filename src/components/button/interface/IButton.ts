import { ReactNode } from "react";

export type ButtonVariant = "primary" | "springGreen" | "pigmentGreen" | "gray" | "gunmetal" ;
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}