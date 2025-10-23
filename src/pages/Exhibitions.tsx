import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Exhibitions = () => {
  const upcomingExhibitions = [
    {
      title: "Ethereal Landscapes",
      date: "November 15 - December 30, 2025",
      location: "Lumina Gallery, Portland",
      description: "A new collection exploring the subtle beauty of natural environments through minimalist photography and digital compositions.",
      status: "upcoming",
    },
    {
      title: "Winter Reflections",
      date: "January 10 - February 28, 2026",
      location: "Seattle Contemporary Art Space",
      description: "Collaborative exhibition featuring works that capture the quiet introspection of winter seasons.",
      status: "upcoming",
    },
  ];

  const pastExhibitions = [
    {
      title: "Quiet Spaces",
      date: "June 1 - August 31, 2024",
      location: "Portland Art Museum",
      description: "Solo exhibition showcasing Elena's signature approach to creating visual sanctuaries through photography and digital art.",
      status: "past",
    },
    {
      title: "Contemporary Visions",
      date: "March 15 - May 20, 2024",
      location: "Seattle Gallery Collective",
      description: "Group exhibition featuring emerging artists from the Pacific Northwest contemporary art scene.",
      status: "past",
    },
    {
      title: "Serenity Series",
      date: "October 5 - November 30, 2023",
      location: "Lumina Gallery, Portland",
      description: "Elena's first solo show at Lumina Gallery, presenting an intimate collection of tranquil compositions.",
      status: "past",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              Exhibitions & Events
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover our upcoming shows and past highlights
            </p>
          </div>

          {/* Upcoming Exhibitions */}
          <section className="mb-20">
            <h2 className="font-display text-3xl font-semibold mb-8 animate-fade-in">
              Upcoming Exhibitions
            </h2>
            <div className="space-y-6">
              {upcomingExhibitions.map((exhibition, index) => (
                <div
                  key={index}
                  className="gallery-card p-6 md:p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2">
                        {exhibition.title}
                      </h3>
                      <Badge variant="secondary" className="mb-2">
                        Upcoming
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exhibition.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exhibition.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exhibition.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Past Exhibitions */}
          <section>
            <h2 className="font-display text-3xl font-semibold mb-8 animate-fade-in">
              Past Exhibitions
            </h2>
            <div className="space-y-6">
              {pastExhibitions.map((exhibition, index) => (
                <div
                  key={index}
                  className="gallery-card p-6 md:p-8 opacity-90 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-2">
                        {exhibition.title}
                      </h3>
                      <Badge variant="outline" className="mb-2">
                        Completed
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exhibition.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exhibition.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exhibition.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Exhibitions;
