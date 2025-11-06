import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import ProjectDescription from "@/components/ProjectDescription";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Investment from "@/components/Investment";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cantiere Verde - Residenze Moderne Milano | Vivi il Futuro, Oggi</title>
        <meta 
          name="description" 
          content="Scopri le nuove residenze moderne a Milano. Appartamenti di lusso con classe energetica A4, design contemporaneo e personalizzazione completa. Prenota la tua visita." 
        />
        <meta 
          name="keywords" 
          content="appartamenti nuovi milano, residenze moderne, classe energetica a4, investimento immobiliare, cantiere residenziale" 
        />
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <ProjectDescription />
        <Gallery />
        <Features />
        <Investment />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Index;
