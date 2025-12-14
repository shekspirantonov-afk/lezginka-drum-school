import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h4 className="text-white font-bold mb-5 text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>О школе</h4>
            <p className="text-base leading-relaxed">Ритмы Гор — профессиональная школа лезгинки и кавказских барабанов в Санкт-Петербурге. Мы сохраняем и передаём традиции кавказской культуры.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>Навигация</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#hero" className="hover:text-[#d04430] transition-colors">Главная</a></li>
              <li><a href="#directions" className="hover:text-[#d04430] transition-colors">Направления</a></li>
              <li><a href="#schedule" className="hover:text-[#d04430] transition-colors">Расписание</a></li>
              <li><a href="#pricing" className="hover:text-[#d04430] transition-colors">Цены</a></li>
              <li><a href="#contacts" className="hover:text-[#d04430] transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#d04430] transition-colors"><Icon name="Facebook" size={22} /></a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#d04430] transition-colors"><Icon name="Instagram" size={22} /></a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#d04430] transition-colors"><Icon name="Youtube" size={22} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center"><p className="text-base">© 2024 Ритмы Гор. Все права защищены.</p></div>
      </div>
    </footer>
  );
};

export default Footer;