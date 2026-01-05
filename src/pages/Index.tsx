import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { url: 'https://cdn.poehali.dev/files/01.jpg', alt: 'Групповое фото ансамбля' },
    { url: 'https://cdn.poehali.dev/files/02.jpg', alt: 'Танцевальная пара' },
    { url: 'https://cdn.poehali.dev/files/03.jpg', alt: 'Сольное выступление' },
    { url: 'https://cdn.poehali.dev/files/04.jpg', alt: 'Групповой танец' },
    { url: 'https://cdn.poehali.dev/files/05.png', alt: 'Выступление на сцене' },
    { url: 'https://cdn.poehali.dev/files/06.jpg', alt: 'Барабанщики' },
    { url: 'https://cdn.poehali.dev/files/07.jpg', alt: 'Репетиция' },
    { url: 'https://cdn.poehali.dev/files/08.jpg', alt: 'Динамичный танец' },
    { url: 'https://cdn.poehali.dev/files/09.jpg', alt: 'Тренировка' },
    { url: 'https://cdn.poehali.dev/files/10.jpg', alt: 'Барабанщик' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Music" className="text-amber-500" size={32} />
            <h1 className="text-2xl font-bold text-white">Раграфика</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-slate-300 hover:text-amber-500 transition">О нас</a>
            <a href="#gallery" className="text-slate-300 hover:text-amber-500 transition">Галерея</a>
            <a href="#contact" className="text-slate-300 hover:text-amber-500 transition">Контакты</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            Записаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" className="text-amber-500" size={20} />
            <span className="text-amber-500 font-medium">Народный танцевальный ансамбль</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Традиции в движении
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Сохраняем и развиваем культуру кавказского танца. Приглашаем детей и взрослых в наш коллектив.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Icon name="Users" size={20} />
              Присоединиться
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Icon name="Play" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">О коллективе</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-amber-500" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Опытные педагоги</h4>
                <p className="text-slate-400">
                  Профессиональные хореографы с многолетним опытом преподавания народных танцев
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-amber-500" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Разные возрастные группы</h4>
                <p className="text-slate-400">
                  Занятия для детей от 5 лет, подростков и взрослых. Каждый найдет свою группу
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-amber-500" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Выступления и конкурсы</h4>
                <p className="text-slate-400">
                  Регулярные выступления на фестивалях и участие в международных конкурсах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Наши моменты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-4xl font-bold text-white mb-6">Свяжитесь с нами</h3>
          <p className="text-slate-300 mb-8">
            Приглашаем всех желающих познакомиться с культурой кавказского танца. Первое занятие бесплатно!
          </p>
          <div className="flex flex-col gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Icon name="Phone" size={20} />
              +7 (123) 456-78-90
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Icon name="Mail" size={20} />
              info@ragrafika.ru
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Icon name="MapPin" size={20} />
              Москва, ул. Примерная, д. 1
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-700">
        <div className="container mx-auto text-center text-slate-400">
          <p>© 2026 Раграфика. Народный танцевальный ансамбль.</p>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Увеличенное фото"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Index;
