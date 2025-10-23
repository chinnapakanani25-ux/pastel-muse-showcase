import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import heroImage from "@/assets/hero-gallery.jpg";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const Home = () => {
  const featuredArtworks = [
    {
      image: artwork1,
      title: "Flowing Dreams",
      category: "Photography",
      description: "An exploration of organic forms and soft color palettes",
    },
    {
      image: artwork2,
      title: "Geometric Harmony",
      category: "Digital Art",
      description: "Modern patterns inspired by nature's symmetry",
    },
    {
      image: artwork3,
      title: "Mountain Serenity",
      category: "Photography",
      description: "Capturing the tranquil beauty of minimalist landscapes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Gallery interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where Art Meets Vision
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Discover a curated collection of contemporary art and photography that inspires and transforms
            </p>
            <Link to="/gallery">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-base md:text-lg px-8 py-6 h-auto">
                View Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Artworks */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                Featured Collection
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A selection of our most captivating pieces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArtworks.map((artwork, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ArtworkCard {...artwork} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/gallery">
                <Button variant="outline" size="lg">
                  Explore All Artworks
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="hero-gradient py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
              Experience Art Like Never Before
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join us in celebrating creativity and artistic expression. Explore our exhibitions, connect with artists, and find your next piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/exhibitions">
                <Button size="lg" variant="default">
                  View Exhibitions
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
