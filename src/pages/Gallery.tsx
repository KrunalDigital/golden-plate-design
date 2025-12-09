import { useState } from 'react';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-restaurant.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Restaurant Main Dining Hall', category: 'Interior' },
  { src: dish1, alt: 'Wagyu Ribeye', category: 'Food' },
  { src: dish2, alt: 'Seared Scallops', category: 'Food' },
  { src: dish3, alt: 'Chocolate Dessert', category: 'Food' },
  { src: heroImage, alt: 'Private Dining Room', category: 'Interior' },
  { src: dish1, alt: 'Gourmet Steak', category: 'Food' },
  { src: dish2, alt: 'Seafood Platter', category: 'Food' },
  { src: heroImage, alt: 'Bar Area', category: 'Interior' },
  { src: dish3, alt: 'Dessert Presentation', category: 'Food' },
];

type CategoryFilter = 'all' | 'Interior' | 'Food';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-charcoal">
        <div className="container-custom text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Visual Journey
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the Aurum experience — from our meticulously crafted dishes 
            to our elegant ambience.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4">
            {(['all', 'Interior', 'Food'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-foreground font-display font-semibold text-lg">
                      {image.alt}
                    </p>
                    <p className="text-primary text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-foreground font-display font-semibold text-xl">
                {selectedImage.alt}
              </p>
              <p className="text-primary text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
