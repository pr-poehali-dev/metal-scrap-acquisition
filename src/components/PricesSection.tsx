import Icon from "@/components/ui/icon";

const ferrous = [
  { name: "Сталь 3А", price: "22 500" },
  { name: "Сталь 5А", price: "21 000" },
  { name: "Чугун", price: "20 000" },
  { name: "Стружка стальная", price: "14 000" },
  { name: "Кровельное железо", price: "18 000" },
];

const nonFerrous = [
  { name: "Медь (блеск)", price: "680 000" },
  { name: "Медь (микс)", price: "620 000" },
  { name: "Алюминий (электротех)", price: "145 000" },
  { name: "Алюминий (микс)", price: "95 000" },
  { name: "Латунь", price: "380 000" },
  { name: "Бронза", price: "420 000" },
  { name: "Нержавейка", price: "85 000" },
  { name: "Свинец", price: "135 000" },
];

const PricesSection = () => {
  return (
    <section id="prices" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Прайс-лист
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Актуальные цены
          </h2>
          <p className="text-muted-foreground text-lg">
            Цены обновляются ежедневно в соответствии с биржевыми котировками
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-card overflow-hidden">
            <div className="px-6 py-4 bg-foreground">
              <div className="flex items-center gap-3">
                <Icon name="CircleDot" size={20} className="text-primary" />
                <h3 className="font-heading font-semibold text-lg text-white">
                  Чёрные металлы
                </h3>
              </div>
            </div>
            <div className="divide-y">
              {ferrous.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="font-heading font-semibold text-primary">
                    {item.price} ₽/т
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-card overflow-hidden">
            <div className="px-6 py-4 bg-primary">
              <div className="flex items-center gap-3">
                <Icon name="Gem" size={20} className="text-white" />
                <h3 className="font-heading font-semibold text-lg text-white">
                  Цветные металлы
                </h3>
              </div>
            </div>
            <div className="divide-y">
              {nonFerrous.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="font-heading font-semibold text-primary">
                    {item.price} ₽/т
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
          <Icon name="Info" size={14} />
          <span>Цены указаны с НДС. При объёме от 5 тонн — индивидуальные условия.</span>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
