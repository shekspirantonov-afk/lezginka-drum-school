import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative px-6 bg-gradient-to-r from-[#A0341E] via-[#C5613A] to-[#D67D42] text-white overflow-hidden py-24">
      <div className="absolute top-12 left-16 opacity-40">
        <Icon name="Music2" size={48} className="text-white" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Почувствуй
        </h2>
        <h3 
          className="text-5xl md:text-6xl lg:text-7xl font-black mb-12"
          style={{ 
            WebkitTextStroke: '2px white',
            color: 'transparent',
            letterSpacing: '0.03em'
          }}
        >
          Ритмы Гор
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto">
          Изучай традиционные кавказские танцы и барабаны с<br/>профессиональными мастерами
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-[#E8812D] hover:bg-[#D97424] text-white px-10 py-6 text-base font-medium rounded-lg flex items-center gap-2"
          >
            <Icon name="Play" size={20} />
            Начать обучение
          </Button>
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-50 text-[#C5613A] px-10 py-6 text-base font-medium rounded-lg flex items-center gap-2"
          >
            <Icon name="Phone" size={20} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
