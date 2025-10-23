import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

type Category = "All" | "Photography" | "Paintings" | "Digital Art";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const artworks = [
    {
      image: artwork1,
      title: "Flowing Dreams",
      category: "Photography" as const,
      description: "An exploration of organic forms and soft color palettes",
    },
    {
      image: artwork2,
      title: "Geometric Harmony",
      category: "Digital Art" as const,
      description: "Modern patterns inspired by nature's symmetry",
    },
    {
      image: artwork3,
      title: "Mountain Serenity",
      category: "Photography" as const,
      description: "Capturing the tranquil beauty of minimalist landscapes",
    },
    {
      image: artwork4,
      title: "Abstract Emotions",
      category: "Paintings" as const,
      description: "Soft brushstrokes expressing inner tranquility",
    },
    {
      image: artwork5,
      title: "Botanical Study",
      category: "Photography" as const,
      description: "Delicate botanical forms in natural light",
    },
    {
      image: artwork6,
      title: "Fluid Dynamics",
      category: "Digital Art" as const,
      description: "Digital exploration of movement and form",
    },
  ];

  const categories: Category[] = ["All", "Photography", "Paintings", "Digital Art"];

  const filteredArtworks = selectedCategory === "All"
    ? artworks
    : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              Our Collection
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our carefully curated artworks across different mediums
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ArtworkCard {...artwork} />
              </div>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No artworks found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
