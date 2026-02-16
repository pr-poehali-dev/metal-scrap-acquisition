import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Scale" as const,
    title: "Точное взвешивание",
    text: "Сертифицированные весы с регулярной поверкой",
  },
  {
    icon: "Banknote" as const,
    title: "Моментальная оплата",
    text: "Наличный и безналичный расчёт в день сдачи",
  },
  {
    icon: "ShieldCheck" as const,
    title: "Лицензия",
    text: "Все необходимые лицензии и разрешения",
  },
  {
    icon: "Leaf" as const,
    title: "Экология",
    text: "Переработка в соответствии с экологическими нормами",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              О компании
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Надёжный партнёр
              <br />
              в сфере металлолома
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Более 15 лет мы занимаемся приёмом и переработкой лома чёрных и цветных металлов.
              За это время мы выстроили прозрачную систему работы, которая гарантирует честные условия
              для каждого клиента.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наша площадка оснащена современным оборудованием для приёмки, сортировки
              и взвешивания металлолома. Работаем как с частными лицами, так и с предприятиями.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
