import colors from "../../styles/colors";
import { ButtonSize, ButtonProps } from "./interface/IButton";

type SecondaryButtonVariant = "secondary" | "secondaryGradiant" | "secondaryNeon" | "gray" | "gunmetal";

// Antigo field borderGradient removido; mantido comentado para futura restauração se necessário
// const OLD_SECONDARY_GRADIENT = `linear-gradient(135deg, ${colors.button.slateBlue}, ${colors.button.darkBlue})`;
// const OLD_GRAY_GRADIENT = `linear-gradient(135deg, ${colors.button.gray}, ${colors.text.muted})`;

const variantStyles: Record<SecondaryButtonVariant, { bg: string; hover: string; text: string; borderColor: string }> = {
  secondary: {
    bg: colors.background.darkBlue,
    hover: colors.background.darkBlue,
    text: colors.lightBlue,
    borderColor: colors.background.darkBlue,
  },
  secondaryGradiant: {
    // Mantemos apenas o background composto (sem wrapper para borda)
    bg: `linear-gradient(135deg, ${colors.button.slateBlue}, ${colors.button.darkBlue})`,
    hover: colors.button.emerald,
    text: colors.text.highlight,
    borderColor: colors.border.slateBlue,
  },
  secondaryNeon: {
    bg: colors.button.darkBlue,
    hover: colors.background.darkBlue,
    text: colors.emerald,
    borderColor: colors.border.accent,
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

interface SecondaryButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: SecondaryButtonVariant;
}

export default function SecondaryButton({
  children,
  leftIcon,
  rightIcon,
  variant = "secondary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
}: SecondaryButtonProps) {
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
