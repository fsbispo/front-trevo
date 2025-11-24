import React from "react";
import { MdChevronRight } from 'react-icons/md';

interface LevelUpCardProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

const LevelUpCard: React.FC<LevelUpCardProps> = ({
  title,
  buttonText,
  onButtonClick,
  children,
}) => (
  <div className="relative overflow-hidden rounded-lg bg-gunmetal/40 border border-emerald-500/20">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4">
      <div className="md:col-span-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <button
          className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-emerald-500 text-gunmetal font-semibold hover:bg-emerald-400 transition"
          onClick={onButtonClick}
        >
          {buttonText} <MdChevronRight />
        </button>
      </div>
      <div className="md:col-span-4 justify-self-end hidden md:block">
        <div className="w-[220px] h-[120px] rounded-lg bg-gradient-to-br from-emerald-500/30 to-cyan-400/20 border border-emerald-400/30" />
        {children}
      </div>
    </div>
  </div>
);

export default LevelUpCard;
