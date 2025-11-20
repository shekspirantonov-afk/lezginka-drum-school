import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative px-6 bg-gradient-to-r from-[#A0451E] via-[#C4693D] to-[#D8914A] text-white overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Деликатный орнамент слева */}
      <div className="absolute top-10 left-8 opacity-10" style={{ 
        width: '60px',
        height: '60px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='white' stroke-width='2'/%3E%3Cpath d='M30 15 L35 25 L45 25 L37 32 L40 42 L30 35 L20 42 L23 32 L15 25 L25 25 Z' fill='white'/%3E%3C/svg%3E")`
      }} />
      
      {/* Деликатный орнамент справа */}
      <div className="absolute top-10 right-8 opacity-10" style={{ 
        width: '60px',
        height: '60px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='white' stroke-width='2'/%3E%3Cpath d='M30 15 L35 25 L45 25 L37 32 L40 42 L30 35 L20 42 L23 32 L15 25 L25 25 Z' fill='white'/%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto text-center relative z-10">
        <h2 style={{ fontSize: '80px', fontWeight: 700, marginBottom: '15px', lineHeight: '1' }}>
          Почувствуй
        </h2>
        <h3 
          style={{ 
            fontSize: '96px',
            fontWeight: 900,
            WebkitTextStroke: '4px white',
            color: 'transparent',
            letterSpacing: '0.02em',
            marginBottom: '35px',
            lineHeight: '0.95'
          }}
        >
          Ритмы Гор
        </h3>
        <p style={{ fontSize: '26px', marginBottom: '50px', lineHeight: '1.5', maxWidth: '950px', margin: '0 auto 50px', fontWeight: 400 }}>
          Изучай традиционные кавказские танцы и барабаны с<br/>профессиональными мастерами
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button 
            className="bg-[#E8812D] hover:bg-[#D67226] text-white rounded-lg flex items-center gap-3"
            style={{ padding: '18px 40px', fontSize: '17px', fontWeight: 500 }}
          >
            <Icon name="Play" size={20} />
            Начать обучение
          </Button>
          <Button 
            className="bg-white hover:bg-gray-50 text-[#D04430] rounded-lg flex items-center gap-3"
            style={{ padding: '18px 40px', fontSize: '17px', fontWeight: 500 }}
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