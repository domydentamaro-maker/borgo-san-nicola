const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cantiere Verde</h3>
            <p className="text-primary-foreground/80">
              Il tuo nuovo modo di abitare. Design, comfort e sostenibilità in perfetta armonia.
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
              <li>Via delle Residenze, 1</li>
              <li>20100 Milano (MI)</li>
              <li>Tel: +39 02 1234 5678</li>
              <li>info@cantiereverde.it</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Cantiere Verde. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
