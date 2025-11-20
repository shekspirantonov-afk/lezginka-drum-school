const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Галерея</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array(12).fill(0).map((_, idx) => (
            <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-[#d04430] to-[#e8812d] opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
