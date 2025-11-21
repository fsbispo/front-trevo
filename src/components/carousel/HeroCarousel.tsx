import React, { useState } from "react";
import CarouselDots from "./CarouselDots";

interface HeroCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  autoPlayInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Imagens do carrossel */}
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
              flexShrink: 0,
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* Dots de navegação */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "-40px",
          transform: "translateX(-50%)",
          opacity: 0.9,
        }}
      >
        <CarouselDots
          totalSlides={images.length}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
