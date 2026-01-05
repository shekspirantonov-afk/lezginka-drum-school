import { useState } from 'react';
import Icon from '@/components/ui/icon';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    'https://cdn.poehali.dev/files/01.jpg',
    'https://cdn.poehali.dev/files/02.jpg',
    'https://cdn.poehali.dev/files/03.jpg',
    'https://cdn.poehali.dev/files/04.jpg',
    'https://cdn.poehali.dev/files/05.png',
    'https://cdn.poehali.dev/files/06.jpg',
    'https://cdn.poehali.dev/files/07.jpg',
    'https://cdn.poehali.dev/files/08.jpg',
    'https://cdn.poehali.dev/files/09.jpg',
    'https://cdn.poehali.dev/files/10.jpg',
  ];

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <section id="gallery" className="py-12 md:py-20 px-4 bg-white scroll-mt-20 md:scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => openLightbox(img, idx)}
              >
                <img 
                  src={img} 
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[60] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <Icon name="X" size={24} className="md:w-8 md:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 md:left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 md:p-3"
          >
            <Icon name="ChevronLeft" size={24} className="md:w-8 md:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 md:right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 md:p-3"
          >
            <Icon name="ChevronRight" size={24} className="md:w-8 md:h-8" />
          </button>

          <img 
            src={selectedImage} 
            alt="Полноэкранный просмотр"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;