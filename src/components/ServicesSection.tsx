import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "CircleDot" as const,
    title: "Чёрные металлы",
    description: "Сталь, чугун, железо — принимаем любые объёмы от 100 кг",
    items: ["Стальной лом", "Чугунный лом", "Стружка", "Кровельное железо"],
  },
  {
    icon: "Gem" as const,
    title: "Цветные металлы",
    description: "Медь, алюминий, латунь, бронза, свинец, нержавейка",
    items: ["Медный лом", "Алюминиевый лом", "Латунь и бронза", "Нержавеющая сталь"],
  },
  {
    icon: "Cable" as const,
    title: "Кабель и провод",
    description: "Медный и алюминиевый кабель в изоляции и без",
    items: ["Силовой кабель", "Обмоточный провод", "Кабель связи", "Провод в изоляции"],
  },
  {
    icon: "Truck" as const,
    title: "Вывоз лома",
    description: "Бесплатный вывоз от 1 тонны собственным транспортом",
    items: ["Бесплатная погрузка", "Собственный автопарк", "Оперативный выезд", "По всему региону"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Приём металла
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Что мы принимаем
          </h2>
          <p className="text-muted-foreground text-lg">
            Работаем со всеми видами лома чёрных и цветных металлов. Честная оценка, прозрачные условия.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon name={service.icon} size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
