import React from "react";
import { FaPlay } from "react-icons/fa";
import { playButtonColors } from "../../styles/colors";

type PlayButtonSize = "sm" | "md" | "lg";

interface PlayButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: PlayButtonSize;
}

const sizeStyles: Record<PlayButtonSize, { padding: string; fontSize: string; iconSize: string; borderRadius: number; gap: number }> = {
  sm: {
    padding: "4px 9px",
    fontSize: "14px",
    iconSize: "14px",
    borderRadius: 8,
    gap: 6
  },
  md: {
    padding: "10px 16px",
    fontSize: "16px",
    iconSize: "16px",
    borderRadius: 12,
    gap: 10
  },
  lg: {
    padding: "12px 18px",
    fontSize: "18px",
    iconSize: "18px",
    borderRadius: 16,
    gap: 10
  },
};

const PlayButton: React.FC<PlayButtonProps> = ({
  onClick,
  disabled = false,
  className = "",
  size = "sm",
}) => {
  const sizeStyle = sizeStyles[size];
  
  const gradient = `linear-gradient(95deg, 
    ${playButtonColors.gradient.from}, 
    ${playButtonColors.gradient.mid} 35%, 
    ${playButtonColors.gradient.mid2} 70%, 
    ${playButtonColors.gradient.to}
  )`;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center transition-all duration-200
        ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
        ${className}
      `}
      style={{
        borderRadius: sizeStyle.borderRadius,
        background: gradient,
        border: `1px solid ${playButtonColors.border}`,
        padding: sizeStyle.padding,
        gap: sizeStyle.gap,
        fontWeight: 700,
        fontSize: sizeStyle.fontSize,
        color: playButtonColors.text,
        userSelect: "none",
        fontFamily: "var(--font-familjen-grotesk)",
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.filter = "brightness(1.08)";
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      <b className="hidden md:block uppercase">
        Jogar
      </b>

      <FaPlay style={{ minWidth: sizeStyle.iconSize, fontSize: sizeStyle.iconSize }} />
    </button>
  );
};

export default PlayButton;
