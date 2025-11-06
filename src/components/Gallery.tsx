import { useState } from "react";
import interiorRender from "@/assets/interior-render.jpg";
import floorPlan from "@/assets/floor-plan.jpg";
import exteriorRender from "@/assets/exterior-render.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: interiorRender, alt: "Render interno appartamento" },
    { src: floorPlan, alt: "Planimetria appartamento tipo" },
    { src: exteriorRender, alt: "Render esterno edificio" },
    { src: heroBuilding, alt: "Vista notturna del complesso" },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Galleria
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-12" />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-elegant"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Immagine ingrandita"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
