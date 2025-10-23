import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              About the Artist
            </h1>
            <p className="text-muted-foreground text-lg">
              A journey through creativity and expression
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="animate-fade-in">
              <img
                src={artistPortrait}
                alt="Artist portrait"
                className="w-full rounded-lg gallery-card"
              />
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                  Elena Morrison
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Born in 1988, Elena Morrison is a contemporary artist and photographer whose work explores the intersection of natural beauty and abstract expression. Based in Portland, Oregon, her artistic practice focuses on capturing fleeting moments of serenity and transforming them into timeless visual narratives.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Artist Statement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "My work is a meditation on the subtle beauty found in everyday moments. Through photography and digital art, I seek to create spaces of tranquility—visual refuges that invite viewers to pause, breathe, and reconnect with their inner calm. Each piece is crafted with intention, using soft palettes and organic forms to evoke a sense of peaceful contemplation."
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Creative Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Elena's artistic journey began with analog photography during her travels through Southeast Asia in 2010. Inspired by the region's minimalist aesthetics and contemplative philosophies, she developed a distinctive style characterized by muted tones, gentle compositions, and an emphasis on negative space. Her work has been exhibited in galleries across the Pacific Northwest and featured in several international art publications.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-gradient rounded-lg p-8 md:p-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-center">
              Exhibitions & Recognition
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">2024</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Quiet Spaces" - Portland Art Museum</li>
                  <li>• "Contemporary Visions" - Seattle Gallery Collective</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2023</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Serenity Series" - Lumina Gallery Solo Show</li>
                  <li>• Featured in Modern Art Magazine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2022</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Nature's Palette" - Group Exhibition</li>
                  <li>• Photography Award - Pacific Arts Foundation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2021</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Minimal Moments" - Virtual Exhibition</li>
                  <li>• Artist Residency - Mountain Light Studio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
