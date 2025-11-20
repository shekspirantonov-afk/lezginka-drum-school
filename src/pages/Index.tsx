import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', phone: '', direction: '' });
  };

  const directions = [
    {
      title: 'Лезгинка',
      subtitle: 'Традиционный танец с огненным характером',
      level: 'Начинающие',
      duration: '1.5 часа',
      price: '3500₽/мес'
    },
    {
      title: 'Кавказские барабаны',
      subtitle: 'Ритмы гор в ваших руках',
      level: 'Начинающие',
      duration: '1.5 часа',
      price: '3500₽/мес'
    },
    {
      title: 'Семейная лезгинка',
      subtitle: 'Танцы для всей семьи',
      level: 'Начинающие',
      duration: '1 час',
      price: '3500₽/мес'
    },
    {
      title: 'Индивидуальные занятия',
      subtitle: 'Персональный подход к каждому',
      level: 'Любой уровень',
      duration: '1 час',
      price: '2500₽/час'
    }
  ];

  const schedule = {
    drums: [
      { time: '12:00-13:30', group: 'Начальная группа' },
      { time: '13:30-15:00', group: 'Концертный состав' }
    ],
    family: [
      { time: '15:00-16:30', group: 'Детская группа' },
      { time: '16:30-18:00', group: 'Взрослая группа' }
    ],
    wedding: [
      { time: '18:00-19:00', group: 'Женская группа' },
      { time: '19:00-20:00', group: 'Мужская группа' }
    ]
  };

  const prices = [
    {
      title: 'Абонемент на месяц',
      price: '3500₽',
      features: ['8 занятий в месяц', 'Групповые занятия', 'Все материалы включены']
    },
    {
      title: 'Общее абонемент',
      price: '5000₽',
      features: ['12 занятий в месяц', 'Групповые занятия', 'Доступ к мастер-классам'],
      popular: true
    },
    {
      title: 'Индивидуальное обучение',
      price: '2500₽',
      features: ['Персональный подход', 'Гибкое расписание', 'Быстрый прогресс']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <img 
                  src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg" 
                  alt="Логотип"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-600">Ритмы Гор</h1>
                <p className="text-xs text-gray-600">Школа лезгинки и<br/>кавказских барабанов</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <a href="#directions" className="hover:text-orange-600">Направления</a>
              <a href="#schedule" className="hover:text-orange-600">Расписание</a>
              <a href="#prices" className="hover:text-orange-600">Цены</a>
              <a href="#gallery" className="hover:text-orange-600">Галерея</a>
              <a href="#contact" className="hover:text-orange-600">Контакты</a>
            </nav>

            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-24 px-4 bg-gradient-to-br from-red-700 via-red-600 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Почувствуй
          </h2>
          <h3 
            className="text-6xl md:text-7xl font-bold mb-8"
            style={{ 
              WebkitTextStroke: '2px white',
              color: 'transparent'
            }}
          >
            Ритмы Гор
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Изучай традиционные кавказские танцы и барабаны с<br/>профессиональными мастерами
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6"
            >
              Начать обучение
            </Button>
            <Input 
              placeholder="Ваш номер телефона" 
              className="bg-white text-gray-800 py-6 md:flex-1"
            />
          </div>
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
              <Card key={idx} className="bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dir.title}</h3>
                  <p className="text-white/90 mb-4 text-sm">{dir.subtitle}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Award" size={16} />
                      <span>{dir.level}</span>
                    </div>
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
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Кавказские барабаны</h3>
              <div className="space-y-3">
                {schedule.drums.map((item, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 px-4 py-2 rounded font-semibold">
                          {item.time}
                        </div>
                        <span className="text-gray-700">{item.group}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Семейная лезгинка</h3>
              <div className="space-y-3">
                {schedule.family.map((item, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 px-4 py-2 rounded font-semibold">
                          {item.time}
                        </div>
                        <span className="text-gray-700">{item.group}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Свадебная лезгинка</h3>
              <div className="space-y-3">
                {schedule.wedding.map((item, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 px-4 py-2 rounded font-semibold">
                          {item.time}
                        </div>
                        <span className="text-gray-700">{item.group}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Цены
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Для каждого клиента найдется удобный вариант абонемента
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((price, idx) => (
              <Card key={idx} className={price.popular ? 'border-2 border-orange-500 shadow-xl' : ''}>
                <CardContent className="p-8 text-center">
                  {price.popular && (
                    <div className="bg-orange-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                      Популярный
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{price.title}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">{price.price}</div>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Icon name="Check" size={18} className="text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Записаться на занятие
          </h2>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Направление</label>
                  <select 
                    className="w-full border rounded-md p-2"
                    value={formData.direction}
                    onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                  >
                    <option value="">Выберите направление</option>
                    <option value="lezginka">Лезгинка</option>
                    <option value="drums">Кавказские барабаны</option>
                    <option value="family">Семейная лезгинка</option>
                    <option value="individual">Индивидуальные занятия</option>
                  </select>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/79999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600"
        >
          <Icon name="MessageCircle" size={32} className="text-white" />
        </a>
      </div>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Ритмы Гор. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
