import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Errore",
        description: "Compila tutti i campi obbligatori",
        variant: "destructive"
      });
      return;
    }

    // In production, this would send to a backend
    toast({
      title: "Richiesta Inviata!",
      description: "Ti contatteremo al più presto per fissare un appuntamento."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  return <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Contattaci
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-16" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Prenota una Visita</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I nostri consulenti sono a tua disposizione per mostrarti il progetto, 
                le planimetrie e rispondere a tutte le tue domande. Prenota un appuntamento 
                senza impegno.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefono</h4>
                  <p className="text-muted-foreground">+39 02 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@2dsviluppoimmobiliare.it</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sede</h4>
                  <p className="text-muted-foreground">Via Domenico Di Venere, 37
Ceglie del Campo (Ba)<br />20100 Milano (MI)</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Orari di Apertura</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p>Domenica: Su appuntamento</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-elegant border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome e Cognome *
                </label>
                <Input id="name" type="text" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required className="w-full" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required className="w-full" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefono *
                </label>
                <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required className="w-full" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Messaggio
                </label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} rows={4} className="w-full resize-none" placeholder="Scrivi qui eventuali richieste particolari..." />
              </div>

              <Button type="submit" size="lg" variant="hero" className="w-full">
                Richiedi Informazioni
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Compilando il form acconsenti al trattamento dei dati personali secondo il GDPR
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;