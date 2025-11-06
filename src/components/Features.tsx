import { MapPin, Building2, Leaf, Palette } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Posizione Strategica",
      description: "A pochi minuti dal centro città, con facile accesso a servizi, scuole e trasporti pubblici. La zona è in forte sviluppo urbanistico."
    },
    {
      icon: Building2,
      title: "Servizi Vicini",
      description: "Supermercati, farmacie, centri sportivi e parchi nelle immediate vicinanze. Tutto ciò che serve per la vita quotidiana a portata di mano."
    },
    {
      icon: Leaf,
      title: "Efficienza Energetica",
      description: "Classe energetica A4 con pannelli solari, pompe di calore e isolamento termico di ultima generazione. Risparmio garantito in bolletta."
    },
    {
      icon: Palette,
      title: "Personalizzazione",
      description: "Possibilità di scegliere finiture, materiali e layout interno secondo i propri gusti. Rendiamo unica la tua casa."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Punti di Forza
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-16" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-lg shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
