import { ReactNode, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import colors from "../../styles/colors";

type InputVariant = "default" | "primary" | "secondary" | "success" | "warning" | "error";

interface InputLabelProps {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rightIconClosed?: ReactNode;
  isPasword?: boolean;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  rows?: number;
  variant?: InputVariant;
}

const variantStyles: Record<InputVariant, { bg: string; border: string; focusBorder: string; text: string; label: string }> = {
  default: {
    bg: colors.background.input,
    border: "transparent",
    focusBorder: colors.border.accent,
    text: colors.text.slateBlue,
    label: colors.text.slateBlue,
  },
  primary: {
    bg: colors.background.input,
    border: colors.slateBlue,
    focusBorder: colors.lightBlue,
    text: colors.text.slateBlue,
    label: colors.lightBlue,
  },
  secondary: {
    bg: colors.background.darkBlue,
    border: colors.slateBlue,
    focusBorder: colors.emerald,
    text: colors.text.slateBlue,
    label: colors.emerald,
  },
  success: {
    bg: colors.background.input,
    border: colors.emerald,
    focusBorder: colors.springGreen,
    text: colors.text.slateBlue,
    label: colors.emerald,
  },
  warning: {
    bg: colors.background.input,
    border: "#F59E0B",
    focusBorder: "#FCD34D",
    text: colors.text.slateBlue,
    label: "#F59E0B",
  },
  error: {
    bg: colors.background.input,
    border: "#EF4444",
    focusBorder: "#F87171",
    text: colors.text.slateBlue,
    label: "#EF4444",
  },
};

export default function InputLabel({
  label,
  leftIcon,
  rightIcon,
  rightIconClosed,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextArea = false,
  rows = 4,
  variant = "default",
}: InputLabelProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;
  
  const styles = variantStyles[variant];

  const baseStyles = {
    backgroundColor: styles.bg,
    borderColor: styles.border,
    color: styles.text,
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = styles.focusBorder;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = styles.border;
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <Label htmlFor={id} style={{ color: styles.label }}>{label}</Label>
      <div className="relative w-full">
        {leftIcon && (
          <span 
            className={`absolute left-3 pointer-events-none z-10 ${isTextArea ? 'top-3' : 'top-1/2 -translate-y-1/2'}`}
            style={{ color: styles.text }}
          >
            {leftIcon}
          </span>
        )}
        
        {isTextArea ? (
          <textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            className={`input-placeholder w-full border resize-none ${leftIcon ? "pl-10" : "pl-3"} ${rightIcon ? "pr-10" : "pr-3"} py-2 rounded-md`}
            style={baseStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        ) : (
          <Input
            id={id}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={type === "password" ? "off" : "on"}
            className={`input-placeholder ${leftIcon ? "pl-10" : "pl-3"} ${rightIcon ? "pr-10" : "pr-3"} border`}
            style={baseStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}

        {isPasswordField && !isTextArea && (
          <span 
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
            style={{ color: styles.text }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? rightIcon : rightIconClosed}
          </span>
        )}
        {!isPasswordField && rightIcon && (
          <span 
            className={`absolute right-3 pointer-events-none z-10 ${isTextArea ? 'top-3' : 'top-1/2 -translate-y-1/2'}`}
            style={{ color: styles.text }}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}
