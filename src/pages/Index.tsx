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
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 bg-white flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg" 
                  alt="Логотип"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-600">Ритмы Гор</h1>
                <p className="text-sm text-gray-600">Школа лезгинки и<br/>кавказских барабанов</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-gray-700">
              <a href="#directions" className="hover:text-orange-600 transition-colors">Направления</a>
              <a href="#schedule" className="hover:text-orange-600 transition-colors">Расписание</a>
              <a href="#prices" className="hover:text-orange-600 transition-colors">Цены</a>
              <a href="#gallery" className="hover:text-orange-600 transition-colors">Галерея</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors">Контакты</a>
            </nav>

            <Button 
              className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-8"
              onClick={scrollToContact}
            >
              Записаться
            </Button>

            <button className="md:hidden">
              <Icon name="Menu" size={28} />
            </button>
          </div>
        </div>
      </header>

      <section className="relative py-32 px-4 bg-gradient-to-br from-red-700 via-red-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10">
          <Icon name="Music" size={80} />
        </div>
        <div className="absolute bottom-32 right-20 opacity-10">
          <Icon name="Music" size={120} />
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Почувствуй
          </h2>
          <h3 
            className="text-6xl md:text-8xl font-bold mb-8"
            style={{ 
              WebkitTextStroke: '2px white',
              textStroke: '2px white',
              color: 'transparent',
              paintOrder: 'stroke fill'
            }}
          >
            Ритмы Гор
          </h3>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Изучай традиционные кавказские танцы и барабаны с<br/>профессиональными мастерами
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-7 rounded-lg font-semibold"
              onClick={scrollToContact}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Input 
              placeholder="Введите ваш номер телефона" 
              className="bg-white text-gray-800 border-0 text-lg py-7 md:flex-1"
            />
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Направления обучения
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-72">
                <img 
                  src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg" 
                  alt="Лезгинка"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Лезгинка</h3>
                  <p className="text-sm">Традиционный танец</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Энергичный кавказский танец с огненным характером
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">3000₽/мес</span>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-72">
                <img 
                  src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/d2e5d6ed-28ae-4f3f-b24f-6add9ab9ecbf.jpg" 
                  alt="Барабаны"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Барабаны</h3>
                  <p className="text-sm">Ритмы гор</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Игра на традиционных кавказских барабанах
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">3500₽/мес</span>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-72">
                <img 
                  src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/16e2ed7a-3365-46f7-925c-63b91e7588d4.jpg" 
                  alt="Детские группы"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Дети</h3>
                  <p className="text-sm">От 5 лет</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Детские группы по танцам и барабанам
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">2500₽/мес</span>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Записаться на занятие
          </h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Ваше имя</label>
                  <Input
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Телефон</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Сообщение</label>
                  <Textarea
                    placeholder="Что вас интересует?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-lg"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-7 font-semibold"
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
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
        >
          <Icon name="MessageCircle" size={32} className="text-white" />
        </a>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-orange-500 mb-2">Ритмы Гор</h3>
          <p className="text-gray-400 mb-6">Школа лезгинки и кавказских барабанов</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="tel:+79999999999" className="hover:text-orange-500 transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="mailto:info@ritmygor.ru" className="hover:text-orange-500 transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
