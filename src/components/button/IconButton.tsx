import { ReactNode } from "react";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { ButtonVariant, ButtonSize } from "./interface/IButton";

interface IconButtonProps {
  icon: ReactNode;
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Antigo borderGradient removido. Mantido comentado para futura referência:
// const OLD_ICON_GRADIENT = `linear-gradient(15deg, ${colors.border.emerald}, ${colors.border.pigmentGreen})`;
// const OLD_ICON_ALT = `linear-gradient(135deg, ${colors.border.emerald}, ${colors.border.pigmentGreen})`;
const variantStyles: Record<ButtonVariant, { bg: string; hover: string; text: string; borderColor: string }> = {
  primary: {
    bg: colors.button.primary,
    hover: colors.button.primary,
    text: colors.text.gunmetal,
    borderColor: colors.border.emerald,
  },
  springGreen: {
    bg: colors.button.springGreen,
    hover: colors.button.emerald,
    text: colors.text.gunmetal,
    borderColor: colors.border.emerald,
  },
  pigmentGreen: {
    bg: colors.button.pigmentGreen,
    hover: colors.background.darkBlue,
    text: colors.text.gunmetal,
    borderColor: colors.border.pigmentGreen,
  },
  gray: {
    bg: colors.button.gray,
    hover: colors.button.gray,
    text: colors.text.gray,
    borderColor: colors.border.default,
  },
  gunmetal: {
    bg: colors.gunmetal,
    hover: colors.darkBlue,
    text: colors.text.primary,
    borderColor: colors.border.slateBlue,
  },
};

const sizeStyles: Record<ButtonSize, { padding: string; iconSize: string; borderRadius: string; labelFontSize: string; labelMarginTop: string }> = {
  small: {
    padding: "8px",
    iconSize: "16px",
    borderRadius: "8px",
    labelFontSize: "12px",
    labelMarginTop: "4px",
  },
  medium: {
    padding: "12px",
    iconSize: "24px",
    borderRadius: "12px",
    labelFontSize: "14px",
    labelMarginTop: "6px",
  },
  large: {
    padding: "16px",
    iconSize: "32px",
    borderRadius: "16px",
    labelFontSize: "16px",
    labelMarginTop: "8px",
  },
};

export default function IconButton({
  icon,
  label,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
}: IconButtonProps) {
  const currentVariant = disabled ? "gray" : variant;
  const styles = variantStyles[currentVariant];
  const sizeStyle = sizeStyles[size];

  return (
    <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`flex flex-col items-center justify-center font-semibold transition-all duration-200 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        } ${className}`}
        style={{
          background: styles.bg,
          color: styles.text,
          padding: sizeStyle.padding,
          fontWeight: fonts.weights.bold,
          borderRadius: sizeStyle.borderRadius,
          border: `1px solid ${styles.borderColor}`,
          minWidth: label ? "fit-content" : "auto",
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = styles.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = styles.bg;
          }
        }}
      >
        <span
          style={{
            fontSize: sizeStyle.iconSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </span>
        {label && (
          <span
            style={{
              fontSize: sizeStyle.labelFontSize,
              marginTop: sizeStyle.labelMarginTop,
              fontWeight: fonts.weights.medium,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        )}
    </button>
  );
}
