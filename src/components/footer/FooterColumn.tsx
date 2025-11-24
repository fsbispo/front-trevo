import React from "react";
import { footerStyles } from "@/styles/styles";

interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className="min-w-[120px] flex flex-col gap-2">
      <div className="font-bold mb-1 text-sm" style={{ color: footerStyles.textColor.title }}>{title}</div>
      {items.map((item, i) => (
        <div key={i} className="text-sm opacity-85 cursor-pointer hover:opacity-100 transition-opacity" style={{ color: footerStyles.textColor.subTitle }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default FooterColumn;
