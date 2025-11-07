import { TrendingUp, Shield, Award } from "lucide-react";

const Investment = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Rivalutazione Garantita",
      description: "La zona è in forte espansione con nuove infrastrutture e servizi. Investimento sicuro con prospettive di crescita del valore immobiliare."
    },
    {
      icon: Shield,
      title: "Garanzie e Affidabilità",
      description: "Costruttore con esperienza pluriennale e certificazioni di qualità. Garanzie decennali su struttura e impianti."
    },
    {
      icon: Award,
      title: "Agevolazioni Fiscali",
      description: "Possibilità di accedere a detrazioni fiscali per riqualificazione energetica e bonus prima casa. Consulenza dedicata inclusa."
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Perché Investire Qui?
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-16" />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-card border border-border"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center mb-6 mx-auto">
                <reason.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-elegant border border-accent/20">
          <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">
            Opportunità di Investimento Unica
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed mb-6">
            Il piano urbanistico prevede la realizzazione di un nuovo polo commerciale e il potenziamento 
            dei trasporti pubblici nella zona. Questo progetto si trova nel cuore di questa trasformazione, 
            garantendo un'importante rivalutazione nel medio termine.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">+25%</div>
              <div className="text-sm text-muted-foreground">Rivalutazione prevista</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">A4</div>
              <div className="text-sm text-muted-foreground">Classe energetica</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">10 anni</div>
              <div className="text-sm text-muted-foreground">Garanzia strutturale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
