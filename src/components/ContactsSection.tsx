import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const contacts = [
  {
    icon: "Phone" as const,
    label: "Телефон",
    value: "+7 (913) 913-25-58",
    href: "tel:+79139132558",
    sub: "Звонки принимаем ежедневно",
  },
  {
    icon: "Building2" as const,
    label: "Реквизиты",
    value: "ООО «ВТРРЕСУРС»",
    href: "#",
    sub: "ИНН 5506235052",
  },
  {
    icon: "MapPin" as const,
    label: "Адрес",
    value: "Омск, 2-я Барнаульская, 105",
    href: "https://maps.yandex.ru/?text=Омск+2-я+Барнаульская+105",
    sub: "Пн-Сб: 8:00 — 20:00",
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Контакты
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-lg">
            Готовы обсудить условия сотрудничества и ответить на ваши вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-start gap-4 p-6 rounded-2xl border bg-card hover:border-primary/20 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Icon
                  name={item.icon}
                  size={22}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-heading font-semibold text-lg mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-foreground rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Нужен вывоз лома?
            </h3>
            <p className="text-white/60 text-lg">
              Бесплатный вывоз от 1 тонны. Оставьте заявку — перезвоним за 15 минут.
            </p>
          </div>
          <Button size="lg" className="text-base px-8 shrink-0" asChild>
            <a href="tel:+79139132558">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;