import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Music" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Ритмы Гор</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О школе</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('instructors')} className="hover:text-primary transition-colors">Преподаватели</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <a href="tel:+79217854233" className="hidden md:flex items-center gap-2 text-primary font-semibold">
            <Icon name="Phone" size={20} />
            +7-921-785-42-33
          </a>
        </div>
      </header>

      <section className="relative pt-20 min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/4d5f5b05-dffd-4a58-8fb1-e47e70e72ac1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Школа Лезгинки и Кавказских Барабанов</h1>
            <p className="text-xl mb-8">Профессиональное обучение традиционным танцам и ударным инструментам Кавказа в Санкт-Петербурге</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg" onClick={() => scrollToSection('contact')}>
                Записаться на пробное занятие
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" onClick={() => scrollToSection('services')}>
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">О нашей школе</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <Icon name="Users" className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Опытные преподаватели</h3>
                <p className="text-muted-foreground">Наши инструкторы — профессиональные танцоры и музыканты с многолетним опытом выступлений и преподавания</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6">
                <Icon name="Award" className="text-secondary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Индивидуальный подход</h3>
                <p className="text-muted-foreground">Работаем как с детьми, так и со взрослыми. Индивидуальные и групповые занятия</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <Icon name="MapPin" className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Удобное расположение</h3>
                <p className="text-muted-foreground">Находимся в центре Санкт-Петербурга по адресу: ул. Ефимова, д. 4А, БЦ МИР</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши направления</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/4d5f5b05-dffd-4a58-8fb1-e47e70e72ac1.jpg')`}}></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Music2" className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold">Лезгинка</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Обучение традиционному кавказскому танцу для всех уровней подготовки. Изучение техники, постановка корпуса, работа с музыкой и импровизация.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Групповые занятия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Индивидуальные уроки</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={20} />
                    <span>Подготовка к выступлениям</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url('https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/cb000075-3952-4bdb-a943-c9380dae0c6a.jpg')`}}></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Drumstick" className="text-secondary" size={32} fallback="Music" />
                  <h3 className="text-2xl font-bold">Кавказские барабаны</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Обучение игре на традиционных кавказских ударных инструментах: дхол, дарбука, нагара. Развитие чувства ритма и техники исполнения.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Базовая техника игры</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Традиционные ритмы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Игра в ансамбле</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="instructors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши преподаватели</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Команда профессионалов с большим опытом преподавания и выступлений на сценах России и зарубежья
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="User" className="text-white" size={64} />
                </div>
                <h3 className="text-xl font-bold mb-2">Руслан Магомедов</h3>
                <p className="text-primary font-semibold mb-3">Преподаватель лезгинки</p>
                <p className="text-muted-foreground text-sm">Более 15 лет опыта. Лауреат международных конкурсов. Постановщик танцев для профессиональных коллективов.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Icon name="User" className="text-white" size={64} />
                </div>
                <h3 className="text-xl font-bold mb-2">Амина Гаджиева</h3>
                <p className="text-secondary font-semibold mb-3">Преподаватель лезгинки</p>
                <p className="text-muted-foreground text-sm">10 лет преподавания. Специализируется на работе с детьми и начинающими. Солистка ансамбля кавказского танца.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="User" className="text-white" size={64} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ахмед Исмаилов</h3>
                <p className="text-primary font-semibold mb-3">Преподаватель барабанов</p>
                <p className="text-muted-foreground text-sm">Мастер игры на традиционных ударных инструментах. Участник этнических музыкальных проектов. 12 лет преподавания.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img 
                src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/2c9e66bb-51e2-4653-97f0-30fcc600c386.jpg" 
                alt="Занятия в школе" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Аутентичность:</strong> Сохранение традиций и культурных особенностей кавказских танцев и музыки
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Гибкое расписание:</strong> Занятия с 10:00 до 22:00, семь дней в неделю
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Для всех возрастов:</strong> Программы для детей от 5 лет и взрослых
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Выступления:</strong> Возможность участия в концертах и фестивалях
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <strong>Адрес:</strong><br />
                    ул. Ефимова, д. 4А, БЦ МИР<br />
                    Санкт-Петербург
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <strong>Телефон:</strong><br />
                    <a href="tel:+79217854233" className="text-primary hover:underline">+7-921-785-42-33</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <strong>Email:</strong><br />
                    <a href="mailto:ritmi-gor@yandex.ru" className="text-primary hover:underline">ritmi-gor@yandex.ru</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <div>
                    <strong>Часы работы:</strong><br />
                    Ежедневно с 10:00 до 22:00
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4">Мы в соцсетях:</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Icon name="Instagram" size={24} fallback="Share2" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Icon name="Users" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Запишитесь на пробное занятие</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2 font-semibold">Ваше имя *</label>
                    <Input 
                      required
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Телефон *</label>
                    <Input 
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о себе и ваших целях обучения"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Music" size={32} />
                <span className="text-2xl font-bold">Ритмы Гор</span>
              </div>
              <p className="text-white/80">Школа лезгинки и кавказских барабанов в Санкт-Петербурге</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">О школе</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('instructors')} className="text-white/80 hover:text-white transition-colors">Преподаватели</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>ул. Ефимова, д. 4А, БЦ МИР</li>
                <li><a href="tel:+79217854233" className="hover:text-white transition-colors">+7-921-785-42-33</a></li>
                <li><a href="mailto:ritmi-gor@yandex.ru" className="hover:text-white transition-colors">ritmi-gor@yandex.ru</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Ритмы Гор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
