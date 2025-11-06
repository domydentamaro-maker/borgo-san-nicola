const ProjectDescription = () => {
  return (
    <section id="progetto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Il Progetto
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-12" />
          
          <div className="space-y-8 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              Borgo San Nicola è un complesso residenziale innovativo che integra architettura moderna 
              con ampie aree verdi condominiali. Gli appartamenti sono caratterizzati da balconi 
              panoramici, giardini pensili e un design che valorizza la luce naturale e la sostenibilità.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Caratteristiche Tecniche</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Metrature da 70 a 150 mq</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Classe energetica A4</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Finiture di alto livello</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Ampi terrazzi e balconi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Stile Architettonico</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Design minimalista contemporaneo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Grandi vetrate per luce naturale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Materiali eco-sostenibili</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>Spazi comuni curati e funzionali</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
