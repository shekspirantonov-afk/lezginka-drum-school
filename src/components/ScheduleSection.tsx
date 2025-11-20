const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Расписание занятий
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">Выбирайте удобное время для занятий</p>

        <div className="space-y-12">
          {[
            { title: 'Кавказские барабаны', items: [{ day: 'Пятница', date: '20.12.2024', time: '12:00', group: 'Начальная группа' }, { day: 'Суббота', date: '21.12.2024', time: '13:30-15:00', group: 'Концертный состав' }]},
            { title: 'Семейная лезгинка', items: [{ day: 'Пятница', date: '20.12.2024', time: '15:00-16:30', group: 'Детская группа' }, { day: 'Суббота', date: '21.12.2024', time: '16:30-18:00', group: 'Взрослая группа' }]},
            { title: 'Свадебная лезгинка', items: [{ day: 'Пятница', date: '20.12.2024', time: '18:00-19:00', group: 'Женская группа' }, { day: 'Суббота', date: '21.12.2024', time: '19:00-20:00', group: 'Мужская группа' }]}
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, sidx) => (
                  <div key={sidx} className="bg-gray-50 border-l-4 border-[#d04430] rounded-lg p-5 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="flex items-center gap-6">
                        <div className="text-sm font-semibold text-gray-600 min-w-[140px]">{item.day} {item.date}</div>
                        <div className="text-base font-bold text-[#d04430]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.time}</div>
                      </div>
                      <div className="text-base text-gray-700 font-medium">{item.group}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
