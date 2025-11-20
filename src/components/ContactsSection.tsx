import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за заявку!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "'Montserrat', sans-serif" }}>Контакты</h2>
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="MapPin" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Адрес</span>
              </div>
              <p className="text-gray-300 text-base ml-13 leading-relaxed">г. Санкт-Петербург, Невский проспект, д. 123</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="Phone" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Телефон</span>
              </div>
              <p className="text-gray-300 text-base ml-13">+7 (812) 123-45-67</p>
              <p className="text-gray-300 text-base ml-13">+7 (921) 765-43-21</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="Mail" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</span>
              </div>
              <p className="text-gray-300 text-base ml-13">info@ritmygor.ru</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="Clock" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Режим работы</span>
              </div>
              <p className="text-gray-300 text-base ml-13">Понедельник - Воскресенье</p>
              <p className="text-gray-300 text-base ml-13">10:00 - 22:00</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Записаться на занятие</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input placeholder="Ваше имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 rounded-lg" required />
              <Input type="email" placeholder="Ваш email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 rounded-lg" required />
              <Textarea placeholder="Ваше сообщение" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px] rounded-lg" />
              <Button type="submit" className="w-full bg-[#d04430] hover:bg-[#b83a28] h-12 text-base font-bold rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Отправить заявку</Button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#d04430] to-[#e8812d] h-96 rounded-2xl flex items-center justify-center shadow-xl">
          <div className="text-center">
            <Icon name="MapPin" size={80} className="mx-auto mb-6 opacity-40" />
            <p className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Карта расположения</p>
            <p className="text-base opacity-80">г. Санкт-Петербург, Невский проспект, д. 123</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
