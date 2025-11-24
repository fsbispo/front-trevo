import React from 'react';

interface FooterImagesProps {
  images: string[];
  text: string;
}

const FooterImages: React.FC<FooterImagesProps> = ({ images, text }) => (
  <div className="flex flex-col items-center gap-3 pb-6 px-4">
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
      {images.map((img, i) => (
        <img key={i} src={img} alt={`img${i + 1}`} className="w-20 rounded-lg" />
      ))}
    </div>
    <div className="text-center text-sm opacity-80 mt-2">
      {text}
    </div>
  </div>
);

export default FooterImages;
