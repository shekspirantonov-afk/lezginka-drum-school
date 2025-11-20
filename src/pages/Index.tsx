import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', message: '' });
  };

  const directions = [
    {
      title: 'Лезгинка',
      level: 'Начинающие',
      duration: '1 час 30 мин',
      price: 'от 500₽'
    },
    {
      title: 'Кавказские барабаны',
      level: 'Средний',
      duration: '1 час 30 мин',
      price: 'от 500₽'
    },
    {
      title: 'Семейная лезгинка',
      level: 'Начинающие',
      duration: '1 час 30 мин',
      price: 'от 500₽'
    },
    {
      title: 'Индивидуальные занятия',
      level: 'Начинающие',
      duration: '1 час 30 мин',
      price: 'от 500₽'
    }
  ];

  const schedule = [
    {
      title: 'Кавказские барабаны',
      sessions: [
        { time: '12:00', description: 'Начальная группа' },
        { time: '13:30-15:00', description: 'Концертный состав' }
      ]
    },
    {
      title: 'Семейная лезгинка',
      sessions: [
        { time: '15:00-16:30', description: 'Детская группа' },
        { time: '16:30-18:00', description: 'Взрослая группа' }
      ]
    },
    {
      title: 'Свадебная лезгинка',
      sessions: [
        { time: '18:00-19:00', description: 'Женская группа' },
        { time: '19:00-20:00', description: 'Мужская группа' }
      ]
    }
  ];

  const prices = [
    {
      title: 'Абонемент на месяц',
      price: '3000₽',
      period: 'в месяц',
      features: [
        'Посещение групповых занятий',
        'Доступ к расписанию',
        '8 занятий'
      ]
    },
    {
      title: 'Общее абонемент',
      price: '5500₽',
      period: 'в месяц',
      popular: true,
      features: [
        'Посещение всех направлений',
        'Приоритетная запись',
        'Безлимитные занятия'
      ]
    },
    {
      title: 'Индивидуальное обучение',
      price: '2500₽',
      period: 'за занятие',
      features: [
        'Персональный подход',
        'Гибкий график',
        'Быстрый прогресс'
      ]
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg',
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg',
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg',
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg',
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg',
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg',
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg',
    'https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">Р</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">Rhythmigor Shop</div>
              <div className="text-xs text-gray-600">Школа лезгинки и барабанов</div>
            </div>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">Записаться</Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Почувствуй<br />Rhythms Rigor
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Изучи лезгинку и кавказские барабаны с лучшими преподавателями.<br />
            Присоединяйся к нашему сообществу!
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
            Записаться на занятие
          </Button>
        </div>
      </section>

      <section id="directions" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Направления обучения
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Подходящие занятия найдутся для каждого участника нашей школы
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {directions.map((dir, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all bg-red-600 text-white">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-white text-red-600 text-xs font-bold rounded mb-3">
                    {dir.level}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{dir.title}</h3>
                  <div className="flex items-center gap-4 text-sm opacity-90 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{dir.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-2xl font-bold">{dir.price}</span>
                    <Button className="bg-white text-red-600 hover:bg-gray-100">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Расписание занятий
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Выбирайте удобное для вас время
          </p>

          <div className="space-y-8">
            {schedule.map((item, idx) => (
              <div key={idx} className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <div className="space-y-3">
                  {item.sessions.map((session, sidx) => (
                    <div key={sidx} className="flex items-center gap-4 bg-gray-50 p-4 rounded">
                      <div className="text-red-600 font-bold min-w-[120px]">{session.time}</div>
                      <div className="text-gray-700">{session.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Цены</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((price, idx) => (
              <Card key={idx} className={`relative ${price.popular ? 'border-red-600 border-2 shadow-xl' : ''}`}>
                {price.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярно
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{price.title}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-red-600">{price.price}</div>
                    <div className="text-sm text-gray-600">{price.period}</div>
                  </div>
                  <ul className="space-y-3 mb-6 text-left">
                    {price.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-gray-700">
                        <Icon name="Check" size={16} className="text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${price.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {gallery.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img src={img} alt={`Занятие ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Адрес</div>
                  <div className="text-gray-300">г. Москва, ул. Примерная, д. 1</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Phone" className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-gray-300">+7 (999) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Mail" className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-gray-300">info@rhythmigor.ru</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Clock" className="text-red-500 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Режим работы</div>
                  <div className="text-gray-300">Пн-Вс: 10:00 - 22:00</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Записаться на занятие</h3>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Textarea
                placeholder="Сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
              />
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Отправить заявку
              </Button>
            </form>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-red-600 h-64 rounded-lg flex items-center justify-center text-white">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                <p>Карта местоположения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">О школе</h4>
              <p className="text-sm">Rhythmigor Shop - школа лезгинки и кавказских барабанов в Москве</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#directions" className="hover:text-red-500">Направления</a></li>
                <li><a href="#schedule" className="hover:text-red-500">Расписание</a></li>
                <li><a href="#prices" className="hover:text-red-500">Цены</a></li>
                <li><a href="#contacts" className="hover:text-red-500">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Rhythmigor Shop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
