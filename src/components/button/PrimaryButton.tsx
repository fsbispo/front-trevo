import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { ButtonVariant } from "./interface/IButton";
import { ButtonSize } from "./interface/IButton";
import { ButtonProps } from "./interface/IButton";

// Novo: adicionamos borderColor e deixamos o antigo borderGradient comentado para futura reativação
// const OLD_GRADIENT_PRIMARY = `linear-gradient(15deg, ${colors.border.emerald}, ${colors.border.pigmentGreen})`;
// const OLD_GRADIENT_ALT = `linear-gradient(135deg, ${colors.border.emerald}, ${colors.border.pigmentGreen})`;

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

const sizeStyles: Record<ButtonSize, { padding: string; fontSize: string; iconSize: string; borderRadius: string, gap: string }> = {
  small: {
    padding: "6px 12px",
    fontSize: "14px",
    iconSize: "16px",
    borderRadius: "8px",
    gap: "6px"
  },
  medium: {
    padding: "10px 16px",
    fontSize: "16px",
    iconSize: "20px",
    borderRadius: "12px",
    gap: "10px"
  },
  large: {
    padding: "12px 18px",
    fontSize: "18px",
    iconSize: "24px",
    borderRadius: "16px",
    gap: "10px"
  },
};

export default function PrincipalButton({
  children,
  leftIcon,
  rightIcon,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const currentVariant = disabled ? "gray" : variant;
  const styles = variantStyles[currentVariant];
  const sizeStyle = sizeStyles[size];

  return (
    <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`flex items-center justify-center font-semibold transition-all duration-200 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        } ${className}`}
        style={{
          background: styles.bg,
          color: styles.text,
          padding: sizeStyle.padding,
          fontSize: sizeStyle.fontSize,
          fontWeight: fonts.weights.bold,
          borderRadius: sizeStyle.borderRadius,
          gap: sizeStyle.gap,
          border: `1px solid ${styles.borderColor}`,
          width: "100%",
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
        {leftIcon && (
          <span
            style={{
              fontSize: sizeStyle.iconSize,
              display: "flex",
              alignItems: "center",
            }}
          >
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {rightIcon && (
          <span
            style={{
              fontSize: sizeStyle.iconSize,
              display: "flex",
              alignItems: "center",
            }}
          >
            {rightIcon}
          </span>
        )}
    </button>
  );
}
