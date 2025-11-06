import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Home, Square, Bed, Bath, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Apartment {
  id: string;
  name: string;
  floor: string;
  rooms: number;
  bathrooms: number;
  size: string;
  price?: string;
  available: boolean;
  planimetryUrl?: string;
}

interface Scale {
  id: string;
  name: string;
  description: string;
  apartments: Apartment[];
}

const BuildingStructure = () => {
  const [selectedApartment, setSelectedApartment] = useState<string | null>(null);

  const scales: Scale[] = [
    {
      id: "scala-a",
      name: "Scala A",
      description: "Ingresso principale con vista su giardino",
      apartments: [
        {
          id: "a1",
          name: "A1 - Piano Terra",
          floor: "Piano Terra",
          rooms: 2,
          bathrooms: 1,
          size: "65 mq",
          available: true
        },
        {
          id: "a2",
          name: "A2 - Piano Primo",
          floor: "Piano Primo",
          rooms: 3,
          bathrooms: 2,
          size: "85 mq",
          available: true
        },
        {
          id: "a3",
          name: "A3 - Piano Secondo",
          floor: "Piano Secondo",
          rooms: 3,
          bathrooms: 2,
          size: "90 mq",
          available: false
        },
        {
          id: "a4",
          name: "A4 - Piano Terzo",
          floor: "Piano Terzo",
          rooms: 4,
          bathrooms: 2,
          size: "110 mq",
          available: true
        }
      ]
    },
    {
      id: "scala-b",
      name: "Scala B",
      description: "Posizione centrale con doppio affaccio",
      apartments: [
        {
          id: "b1",
          name: "B1 - Piano Terra",
          floor: "Piano Terra",
          rooms: 2,
          bathrooms: 1,
          size: "70 mq",
          available: true
        },
        {
          id: "b2",
          name: "B2 - Piano Primo",
          floor: "Piano Primo",
          rooms: 3,
          bathrooms: 2,
          size: "95 mq",
          available: true
        },
        {
          id: "b3",
          name: "B3 - Piano Secondo",
          floor: "Piano Secondo",
          rooms: 3,
          bathrooms: 2,
          size: "95 mq",
          available: true
        },
        {
          id: "b4",
          name: "B4 - Attico",
          floor: "Attico",
          rooms: 4,
          bathrooms: 3,
          size: "130 mq",
          available: false
        }
      ]
    },
    {
      id: "scala-c",
      name: "Scala C",
      description: "Vista panoramica sul verde condominiale",
      apartments: [
        {
          id: "c1",
          name: "C1 - Piano Terra",
          floor: "Piano Terra",
          rooms: 2,
          bathrooms: 1,
          size: "68 mq",
          available: true
        },
        {
          id: "c2",
          name: "C2 - Piano Primo",
          floor: "Piano Primo",
          rooms: 3,
          bathrooms: 2,
          size: "88 mq",
          available: false
        },
        {
          id: "c3",
          name: "C3 - Piano Secondo",
          floor: "Piano Secondo",
          rooms: 3,
          bathrooms: 2,
          size: "88 mq",
          available: true
        },
        {
          id: "c4",
          name: "C4 - Piano Terzo",
          floor: "Piano Terzo",
          rooms: 4,
          bathrooms: 2,
          size: "115 mq",
          available: true
        }
      ]
    },
    {
      id: "scala-d",
      name: "Scala D",
      description: "Posizione riservata con ampi terrazzi",
      apartments: [
        {
          id: "d1",
          name: "D1 - Piano Terra",
          floor: "Piano Terra",
          rooms: 2,
          bathrooms: 1,
          size: "72 mq",
          available: false
        },
        {
          id: "d2",
          name: "D2 - Piano Primo",
          floor: "Piano Primo",
          rooms: 3,
          bathrooms: 2,
          size: "92 mq",
          available: true
        },
        {
          id: "d3",
          name: "D3 - Piano Secondo",
          floor: "Piano Secondo",
          rooms: 3,
          bathrooms: 2,
          size: "92 mq",
          available: true
        },
        {
          id: "d4",
          name: "D4 - Attico",
          floor: "Attico",
          rooms: 4,
          bathrooms: 3,
          size: "140 mq",
          available: true
        }
      ]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contatti");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Struttura del Borgo
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-8" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Borgo San Nicola è composto da 4 scale indipendenti, ognuna con caratteristiche uniche. 
          Esplora gli appartamenti disponibili in ogni scala.
        </p>

        <Tabs defaultValue="scala-a" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto">
            {scales.map((scala) => (
              <TabsTrigger 
                key={scala.id} 
                value={scala.id}
                className="py-4 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  <span className="font-semibold">{scala.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {scales.map((scala) => (
            <TabsContent key={scala.id} value={scala.id} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{scala.name}</h3>
                <p className="text-muted-foreground">{scala.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scala.apartments.map((apt) => (
                  <Card
                    key={apt.id}
                    className={`p-6 transition-all duration-300 cursor-pointer hover:shadow-elegant border-2 ${
                      selectedApartment === apt.id 
                        ? 'border-accent' 
                        : apt.available 
                          ? 'border-border hover:border-accent/50' 
                          : 'border-border opacity-60'
                    }`}
                    onClick={() => setSelectedApartment(apt.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Square className="w-6 h-6 text-accent" />
                      </div>
                      {apt.available ? (
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full">
                          Disponibile
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                          Venduto
                        </span>
                      )}
                    </div>

                    <h4 className="font-semibold text-lg mb-2">{apt.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{apt.floor}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Bed className="w-4 h-4 text-accent" />
                        <span>{apt.rooms} {apt.rooms === 1 ? 'Camera' : 'Camere'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bath className="w-4 h-4 text-accent" />
                        <span>{apt.bathrooms} {apt.bathrooms === 1 ? 'Bagno' : 'Bagni'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Maximize2 className="w-4 h-4 text-accent" />
                        <span className="font-semibold">{apt.size}</span>
                      </div>
                    </div>

                    {apt.available && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact();
                        }}
                      >
                        Richiedi Info
                      </Button>
                    )}
                  </Card>
                ))}
              </div>

              {selectedApartment && (
                <div className="mt-8 bg-muted/50 rounded-lg p-8 border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-semibold">
                      Planimetria {scala.apartments.find(a => a.id === selectedApartment)?.name}
                    </h4>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedApartment(null)}
                    >
                      Chiudi
                    </Button>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 aspect-video flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center space-y-4">
                      <Square className="w-16 h-16 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">
                        Planimetria disponibile su richiesta
                      </p>
                      <Button variant="hero" onClick={scrollToContact}>
                        Richiedi Planimetria Dettagliata
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default BuildingStructure;
