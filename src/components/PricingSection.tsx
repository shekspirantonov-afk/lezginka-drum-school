import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Цены</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Абонемент на месяц', price: '3000₽', period: '/ месяц', features: ['8 занятий в месяц', 'Доступ к групповым занятиям', 'Учебные материалы включены', 'Сертификат по окончании курса'] },
            { title: 'Общий абонемент', price: '5500₽', period: '/ месяц', popular: true, features: ['Безлимитный доступ', 'Все направления обучения', 'Приоритетная запись на занятия', 'Участие в мастер-классах', 'Скидки на мероприятия'] },
            { title: 'Индивидуальное обучение', price: '2500₽', period: '/ занятие', features: ['Персональный подход', 'Гибкое расписание', 'Быстрое достижение результата', 'Индивидуальная программа'] }
          ].map((price, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-xl p-8 ${price.popular ? 'ring-4 ring-[#d04430] relative transform scale-105' : ''} hover:shadow-2xl transition-all`}>
              {price.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e8812d] to-[#f39c12] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Популярно</div>
              )}
              <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{price.title}</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-[#d04430]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{price.price}</span>
                <span className="text-gray-500 text-lg ml-1">{price.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {price.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-base text-gray-700">
                    <span className="text-[#d04430] text-xl font-bold flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full h-12 text-base font-bold ${price.popular ? 'bg-[#d04430] hover:bg-[#b83a28]' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-xl`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Выбрать тариф</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
