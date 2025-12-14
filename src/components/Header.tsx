import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-3 md:px-6 md:py-5 px-[30px]">
      <div className="container flex items-center justify-between max-w-6xl mx-0 px-16">
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 md:gap-4 cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <img 
            src="https://cdn.poehali.dev/files/лого вариаент PNG.png" 
            alt="Ритмы Гор"
            className="h-14 md:h-16 lg:h-20 w-auto"
          />
          <div className="text-left">
            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", color: '#d04430' }}>
              Ритмы Гор
            </h1>
            <p className="text-[9px] leading-tight sm:text-xs md:text-sm text-gray-700 font-normal md:font-medium mt-0.5">
              Школа лезгинки и<br /> кавказских барабанов
            </p>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('directions')} className="text-gray-700 hover:text-[#d04430] transition-colors font-medium">Направления</button>
          <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-[#d04430] transition-colors font-medium">Расписание</button>
          <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-[#d04430] transition-colors font-medium">Цены</button>
          <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#d04430] transition-colors font-medium">Галерея</button>
          <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-[#d04430] transition-colors font-medium">Контакты</button>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex bg-[#d04430] hover:bg-[#b83a28] text-white px-6 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => scrollToSection('contacts')}>
            Записаться
          </Button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-[#d04430] transition-colors bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <nav className="flex flex-col gap-3">
            <button onClick={() => scrollToSection('directions')} className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#d04430] rounded-lg transition-colors font-medium">Направления</button>
            <button onClick={() => scrollToSection('schedule')} className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#d04430] rounded-lg transition-colors font-medium">Расписание</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#d04430] rounded-lg transition-colors font-medium">Цены</button>
            <button onClick={() => scrollToSection('gallery')} className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#d04430] rounded-lg transition-colors font-medium">Галерея</button>
            <button onClick={() => scrollToSection('contacts')} className="text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#d04430] rounded-lg transition-colors font-medium">Контакты</button>
            <Button className="mt-2 bg-[#d04430] hover:bg-[#b83a28] text-white font-medium w-full" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => scrollToSection('contacts')}>
              Записаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;