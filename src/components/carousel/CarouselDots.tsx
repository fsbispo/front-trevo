import React, { useState, useEffect } from "react";

interface CarouselDotsProps {
  totalSlides: number;
  currentSlide?: number;
  onSlideChange?: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  totalSlides,
  currentSlide = 0,
  onSlideChange,
  activeColor = "#4ade80",
  inactiveColor = "#64748b",
  backgroundColor = "#1e3a3a",
}) => {
  const [active, setActive] = useState(currentSlide);

  useEffect(() => {
    setActive(currentSlide);
  }, [currentSlide]);

  const handlePrev = () => {
    const newIndex = active > 0 ? active - 1 : totalSlides - 1;
    setActive(newIndex);
    onSlideChange?.(newIndex);
  };

  const handleNext = () => {
    const newIndex = active < totalSlides - 1 ? active + 1 : 0;
    setActive(newIndex);
    onSlideChange?.(newIndex);
  };

  const handleDotClick = (index: number) => {
    setActive(index);
    onSlideChange?.(index);
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "20px",
        backgroundColor: backgroundColor,
        padding: "2px 12px",
        borderRadius: "8px",
      }}
    >
      {/* Botão Anterior */}
      <button
        onClick={handlePrev}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dots */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: index === active ? "24px" : "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor:
                index === active ? activeColor : inactiveColor,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botão Próximo */}
      <button
        onClick={handleNext}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CarouselDots;
