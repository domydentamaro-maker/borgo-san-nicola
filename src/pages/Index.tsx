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
        <title>Borgo San Nicola - Residenze Moderne con Giardini | Nuovi Appartamenti</title>
        <meta 
          name="description" 
          content="Borgo San Nicola: complesso residenziale moderno con giardini condominiali, balconi panoramici e classe energetica A4. Scopri il tuo nuovo appartamento." 
        />
        <meta 
          name="keywords" 
          content="borgo san nicola, appartamenti nuovi, residenze moderne, giardini condominiali, classe energetica a4, investimento immobiliare" 
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
