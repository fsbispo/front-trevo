import React, { useEffect, useRef } from "react";
import WinnerCard from "../cards/WinnerCard";

export type CarouselCardItem = {
  id: number;
  image?: string;
  position: string;
  title: string;
  amount: string;
  name?: string;           
  onPlay?: () => void;     
};

interface CarouselCardProps {
  title: string;
  headerBg?: string;
  items: CarouselCardItem[];
  iconLeft?: React.ReactNode;
  borderColor?: string;
  scrollSpeed?: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  headerBg = "#f1f1f1",
  items,
  iconLeft,
  borderColor = "#f1f1f1",
  scrollSpeed = 0
}) => {
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicamos os itens para criar loop
  const loopItems = [...items, ...items];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    const interval = setInterval(() => {
      container.scrollLeft += scrollSpeed;

      // Quando passar da metade, volta uns px antes
      if (container.scrollLeft >= totalWidth) {
        container.scrollLeft = container.scrollLeft - totalWidth;
      }
    }, 16);

    return () => clearInterval(interval);
  }, [scrollSpeed, items]);

  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: 12,
        border: `1px solid ${borderColor}`,
      }}
    >

      {/* HEADER */}
      <div
        style={{
          background: headerBg,
          padding: "16px 18px",
          fontWeight: "bold",
          fontSize: "18px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
          borderRadius: "8px 8px 0 0",
        }}
      >
        {iconLeft && <div>{iconLeft}</div>}
        <span>{title}</span>
      </div>

      {/* CARROSSEL COM LOOP */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "16px",
          overflow: "hidden",
          padding: "16px 18px",
          whiteSpace: "nowrap",
        }}
      >
        {loopItems.map((item, index) => (
          <WinnerCard
            key={item.id + "-loop-" + index}
            image={item.image}
            position={item.position}
            title={item.title}
            name={item.name}         
            amount={item.amount}
            onPlay={item.onPlay}      
            variant={item.onPlay ? "withButton" : "compact"} 
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;
