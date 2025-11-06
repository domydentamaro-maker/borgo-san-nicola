import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/borgo-exterior-street.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contatti");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    const projectSection = document.getElementById("progetto");
    projectSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Borgo San Nicola
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Dove tradizione e innovazione si incontrano. Un nuovo modo di vivere la città, 
          con appartamenti moderni, giardini condominiali e un design che rispetta l'ambiente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="xl" 
            variant="hero"
            onClick={scrollToContact}
          >
            Prenota una Visita
          </Button>
          <Button 
            size="xl" 
            variant="outline-light"
            onClick={scrollToProject}
          >
            Scopri il Progetto
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProject}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
