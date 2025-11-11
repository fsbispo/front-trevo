import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

type TitleSize = "small" | "medium" | "large";

interface TitleSubtitleProps {
  title?: string;
  subtitle?: string;
  size?: TitleSize;
  className?: string;
}

const sizeStyles: Record<TitleSize, { titleSize: string; subtitleSize: string; gap: string; fontWeight: string }> = {
  small: {
    titleSize: fonts.sizes["2xl"], // 24px
    subtitleSize: fonts.sizes.sm, // 14px
    fontWeight: fonts.weights.bold,
    gap: "1px",
  },
  medium: {
    titleSize: "30px", // 36px
    subtitleSize: fonts.sizes.base, // 16px
    fontWeight: fonts.weights.bold,
    gap: "3px",
  },
  large: {
    titleSize: fonts.sizes["5xl"], // 48px
    subtitleSize: fonts.sizes.lg, // 18px
    fontWeight: fonts.weights.bold,
    gap: "5px",
  },
};

export default function TitleSubtitle({ 
  title, 
  subtitle, 
  size = "large",
  className = "" 
}: TitleSubtitleProps) {
  const styles = sizeStyles[size];

  return (
    <div 
      className={`flex flex-col ${className}`}
      style={{ gap: styles.gap}}>
      {title && (
        <h1 
          className="font-bold leading-tight m-0 p-0"
          style={{ 
            color: colors.springGreen,
            fontSize: styles.titleSize,
            fontFamily: fonts.families.display,
            fontWeight: styles.fontWeight,
            textAlign: "left",
          }}
        >
          {title}
        </h1>
      )}
      {subtitle && (
        <p 
          className="leading-relaxed m-0 p-0"
          style={{ 
            color: colors.text.primary,
            fontSize: styles.subtitleSize,
            fontFamily: fonts.families.primary,
            fontWeight: fonts.weights.normal,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export const ResponsiveTitle = ({ title, subtitle, smallClass = "", mediumClass = "" }: { 
    title: string; 
    subtitle: string;
    smallClass?: string;
    mediumClass?: string;
}) => (
    <>
        <TitleSubtitle 
            title={title} 
            subtitle={subtitle} 
            size="small"
            className={`sm:hidden ${smallClass}`}
        />
        <TitleSubtitle 
            title={title} 
            subtitle={subtitle} 
            size="medium"
            className={`hidden sm:block ${mediumClass}`}
        />
    </>
)

