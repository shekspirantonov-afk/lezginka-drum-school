import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg" 
                  alt="Логотип"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-600">Ритмы Гор</h1>
                <p className="text-sm text-gray-600">Школа лезгинки и кавказских барабанов</p>
              </div>
            </div>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              <Icon name="Menu" size={28} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#directions" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">Направления</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">Контакты</a>
          </nav>
        </div>
      )}

      <section className="relative py-24 px-4 bg-gradient-to-br from-red-600 via-orange-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10 text-white">
          <Icon name="Music" size={150} />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 text-white">
          <Icon name="Music" size={100} />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Почувствуй
          </h2>
          <h3 className="text-6xl md:text-8xl font-bold mb-8" style={{ 
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            letterSpacing: '3px'
          }}>
            Ритмы Гор
          </h3>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Изучай традиционные кавказские танцы и барабаны с профессиональными мастерами
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 text-white hover:bg-orange-400 text-xl px-10 py-8 rounded-full font-bold shadow-2xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Play" size={24} className="mr-3" />
            Начать обучение
          </Button>
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <Input 
              placeholder="Записаться на пробное занятие" 
              className="bg-white/90 text-gray-800 border-0 text-lg py-6"
            />
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">Направления</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Выберите то, что вам интересно
          </p>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg" 
                    alt="Лезгинка"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-2/3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="Flame" size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Лезгинка</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-4">
                    Традиционный кавказский танец с энергичными движениями и огненным характером
                  </p>
                  <p className="text-2xl font-bold text-orange-600">от 3000₽/мес</p>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/d2e5d6ed-28ae-4f3f-b24f-6add9ab9ecbf.jpg" 
                    alt="Барабаны"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-2/3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="Music" size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Кавказские барабаны</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-4">
                    Обучение игре на традиционных кавказских барабанах - почувствуй ритм гор
                  </p>
                  <p className="text-2xl font-bold text-orange-600">от 3500₽/мес</p>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-orange-500">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/16e2ed7a-3365-46f7-925c-63b91e7588d4.jpg" 
                    alt="Детские группы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-2/3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Детские группы</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-4">
                    Танцы и барабаны для детей от 5 лет - развиваем чувство ритма и культуру
                  </p>
                  <p className="text-2xl font-bold text-orange-600">от 2500₽/мес</p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-6">Записаться на занятие</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <Card className="shadow-xl">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Ваше имя</label>
                  <Input
                    required
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон</label>
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
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Сообщение (необязательно)</label>
                  <Textarea
                    placeholder="Напишите, что вас интересует"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="text-lg"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-xl py-7 rounded-full font-bold"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50 animate-bounce">
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
          <h3 className="text-2xl font-bold text-orange-500 mb-3">Ритмы Гор</h3>
          <p className="text-gray-400 mb-6">Школа лезгинки и кавказских барабанов</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="tel:+79999999999" className="hover:text-orange-500 transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="mailto:info@ritmygor.ru" className="hover:text-orange-500 transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
