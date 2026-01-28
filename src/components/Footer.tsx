const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Borgo San Nicola</h3>
            <p className="text-primary-foreground/80">
              Un nuovo modo di vivere la città. Modernità, verde e qualità della vita in perfetto equilibrio.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#progetto" className="hover:text-accent transition-colors">
                  Il Progetto
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-accent transition-colors">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Via Domenico Di Venere 41</li>
              <li>Ceglie del Campo - Bari</li>
              <li>
                <a href="tel:+393408039322" className="hover:text-accent transition-colors">
                  Tel: 340 803 9322
                </a>
              </li>
              <li>info@borgosannicola.it</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Borgo San Nicola. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
