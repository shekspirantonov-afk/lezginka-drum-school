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
    <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 md:px-6 md:py-5">
      <div className="container mx-auto flex items-center justify-between max-w-6xl px-0">
        <button 
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer transition-all duration-300 hover:scale-105 w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px]"
        >
          <img 
            src="https://cdn.poehali.dev/files/лого для кейков вариаент 223.png" 
            alt="Ритмы Гор"
            className="w-full h-auto"
          />
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