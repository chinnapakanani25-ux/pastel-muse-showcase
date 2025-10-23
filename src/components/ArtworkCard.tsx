import { useState } from "react";

interface ArtworkCardProps {
  image: string;
  title: string;
  category: string;
  description?: string;
}

const ArtworkCard = ({ image, title, category, description }: ArtworkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="gallery-card relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-400 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-400">
          <p className="text-xs uppercase tracking-wider text-accent mb-2 opacity-90">
            {category}
          </p>
          <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-white/80 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
