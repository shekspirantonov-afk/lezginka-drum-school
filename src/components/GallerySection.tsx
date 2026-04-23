import { useState } from 'react';
import Icon from '@/components/ui/icon';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/ee81d09c-170f-4b12-a9ca-e293fad84da8.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/c49f7671-2ad8-4bbc-b411-9071b4703ce2.PNG',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/4d9ee0b6-4f47-4a24-883b-4e52bd257582.PNG',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/95e474d1-b96a-4964-9ef3-ef357bfa387f.PNG',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/17c04839-609b-4abe-8b6c-f5e44ba1b5fc.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/5b9e790b-546a-443e-a770-537c7fb2e29a.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/60877f9e-8294-497c-a63f-fdcce61f48a1.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/bd28783f-a7c4-4269-80d5-cd60b1e32e19.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/c7d4e0f9-485b-437a-9d20-c0bca822bd19.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/800a3b74-7809-4c3f-a906-b123f523f4bb.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/345594cc-f63d-466c-9e10-7a17cd76ce97.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/96dd4fba-6ad2-44f6-8e4c-6415ba10705f.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/19a5d68e-ae3a-43a9-999b-1ae4c9e33493.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/5e72ed76-5afe-4507-898d-fe358f474309.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/6adebb6b-88a7-4c4a-9f57-ce54a820af35.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/b6dd9e66-e735-4dd0-a0a8-96218daa3f56.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/66f5279a-af2a-4a34-bd2a-32ecc42acc15.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/cf6c80b3-1354-4d23-b873-9ea64d93b2c9.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/762ac5a3-b898-435d-bd3a-cea15fd4e388.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/e24a90f9-ce75-4c7a-b89f-d341d186e945.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/bucket/6046633b-9846-4122-baee-5c01f553a10e.jpg',
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
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 md:left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 md:p-3"
          >
            <Icon name="ChevronLeft" size={24} className="md:w-8 md:h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
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