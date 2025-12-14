import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap');
        
        @keyframes pulse-sync {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .pulse-icon { animation: pulse-sync 2s ease-in-out infinite; }
      `}} />
      
      <section id="hero" className="relative text-white overflow-hidden px-4 py-12 md:py-16 lg:py-20" style={{ 
        background: 'linear-gradient(135deg, #a72c1a 0%, #d35400 50%, #a72c1a 100%)'
      }}>
        <Icon name="Music" size={32} className="absolute top-4 left-4 md:top-12 md:left-12 md:w-12 md:h-12 opacity-40" />
        <Icon name="Music2" size={40} className="absolute bottom-4 right-4 md:top-12 md:right-12 md:w-16 md:h-16 opacity-30" />
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 leading-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Почувствуй
          </h1>
          <h2 className="text-3xl md:text-7xl mb-4 md:mb-6 leading-none pulse-icon font-bold" style={{ 
            fontFamily: "'Montserrat', sans-serif",
            color: '#e67e22',
            WebkitTextStroke: '2px white',
            textStroke: '2px white',
            paintOrder: 'stroke fill'
          }}>
            Ритмы Гор
          </h2>
          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Изучай традиционные кавказские танцы и барабаны с профессиональными мастерами
          </p>
          <div className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto">
            <Button 
              onClick={scrollToContacts}
              className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-lg shadow-lg flex items-center justify-center gap-3 w-full sm:w-auto max-w-sm" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Icon name="Play" size={22} />
              Начать обучение
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;