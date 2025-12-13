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
    phone: '',
    email: '',
    direction: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/564346b8-9521-4dcc-b9e5-c7c2f1527c3a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Спасибо за заявку!',
          description: 'Мы свяжемся с вами в ближайшее время'
        });
        setFormData({ name: '', phone: '', email: '', direction: '', message: '' });
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Не удалось отправить заявку',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-12 md:py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16" style={{ fontFamily: "'Montserrat', sans-serif" }}>Контакты</h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center flex-shrink-0"><Icon name="MapPin" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Адрес</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base ml-13 leading-relaxed">г. Санкт-Петербург, ул. Ефимова, д. 4А БЦ "МИР"</p>
              <p className="text-gray-400 text-xs md:text-sm ml-13 mt-1">Метро "Садовая / Сенная / Спасская", 4 минуты пешком</p>
              <div className="flex flex-wrap gap-2 ml-13 mt-3">
                <a 
                  href="https://yandex.ru/maps/?rtext=~59.922445,30.309845" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Icon name="Navigation" size={16} />
                  Яндекс.Карты
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=59.922445,30.309845" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Icon name="Navigation" size={16} />
                  Google Maps
                </a>
                <a 
                  href="https://2gis.ru/spb/geo/70030076157777484" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Icon name="Navigation" size={16} />
                  2ГИС
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center flex-shrink-0"><Icon name="Phone" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Телефон</span>
              </div>
              <a href="tel:+79217854233" className="text-gray-300 hover:text-[#d04430] hover:underline transition-colors text-sm md:text-base ml-13 block cursor-pointer underline decoration-gray-500">+7 (921) 785-42-33</a>
              <p className="text-gray-400 text-xs md:text-sm ml-13 mt-1">ежедневно с 10:00 до 22:00</p>
              <Button 
                onClick={() => window.location.href='tel:+79217854233'}
                className="ml-13 mt-3 bg-[#d04430] hover:bg-[#b03626] text-white"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center flex-shrink-0"><Icon name="Mail" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</span>
              </div>
              <a href="mailto:tdvsgroup@yandex.ru" className="text-gray-300 hover:text-[#d04430] hover:underline transition-colors text-sm md:text-base ml-13 block cursor-pointer underline decoration-gray-500">tdvsgroup@yandex.ru</a>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center flex-shrink-0"><Icon name="Clock" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Режим работы</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base ml-13">Понедельник - Воскресенье</p>
              <p className="text-gray-300 text-sm md:text-base ml-13">10:00 - 22:00</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center flex-shrink-0"><Icon name="Share2" className="text-white" size={20} /></div>
                <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Соцсети</span>
              </div>
              <div className="flex gap-3 ml-13">
                <a 
                  href="https://www.instagram.com/ritmi_gor_spb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon name="Instagram" size={20} className="text-white" />
                </a>
                <a 
                  href="https://vk.com/ritmi_gor_spb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077FF] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.4h-1.8c-.52 0-.68-.42-1.61-1.35-.81-.79-1.17-.89-1.37-.89-.28 0-.36.08-.36.47v1.23c0 .33-.11.53-1 .53-1.49 0-3.14-.9-4.3-2.59-1.75-2.35-2.23-4.12-2.23-4.48 0-.2.08-.39.47-.39h1.8c.35 0 .48.16.62.54.68 1.98 1.82 3.71 2.29 3.71.18 0 .26-.08.26-.53v-2.06c-.06-.97-.57-1.05-.57-1.4 0-.16.13-.31.35-.31h2.82c.3 0 .4.16.4.51v2.77c0 .3.13.4.21.4.18 0 .33-.1.66-.43 1.02-1.14 1.74-2.9 1.74-2.9.09-.21.26-.39.61-.39h1.8c.54 0 .66.28.54.66-.22.93-2.41 3.84-2.41 3.84-.15.25-.21.36 0 .65.15.22.64.63 .97.99.61.66 1.07 1.21 1.19 1.59.13.39-.07.59-.46.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#d04430] rounded-full p-4 mb-4">
                <Icon name="Calendar" size={32} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Записаться на занятие</h3>
              <p className="text-gray-400 text-sm mt-2">Заполните форму и мы свяжемся с вами</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Ваше имя *</label>
                <Input 
                  placeholder="Введите ваше имя" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 h-12 rounded-lg" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Телефон *</label>
                <Input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 h-12 rounded-lg" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <Input 
                  type="email" 
                  placeholder="example@mail.com" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 h-12 rounded-lg" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Направление</label>
                <select 
                  value={formData.direction} 
                  onChange={(e) => setFormData({ ...formData, direction: e.target.value })} 
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg h-12 px-4"
                >
                  <option value="">Выберите направление</option>
                  <option value="Лезгинка">Лезгинка</option>
                  <option value="Кавказские барабаны">Кавказские барабаны</option>
                  <option value="Свадебная лезгинка">Свадебная лезгинка</option>
                  <option value="Индивидуальные занятия">Индивидуальные занятия</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о своих пожеланиях" 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 min-h-[100px] rounded-lg" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#d04430] hover:bg-[#b03626] text-white h-12 text-base rounded-lg font-semibold" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Мы на карте</h3>
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=1234567890&ll=30.309845,59.922445&pt=30.309845,59.922445,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Карта расположения школы Ритмы Гор"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;