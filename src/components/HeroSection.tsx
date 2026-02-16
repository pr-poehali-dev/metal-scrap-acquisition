import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/a9919563-e3c0-45e8-9227-75120c0cb1cf/files/ac0c6114-a3bc-4ea6-9731-cefc5e522fbd.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Принимаем лом ежедневно</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
            Покупаем лом
            <br />
            <span className="text-primary">чёрных и цветных</span>
            <br />
            металлов
          </h1>

          <p className="text-lg text-white/70 font-light max-w-lg mb-8 leading-relaxed">
            Честные цены, точное взвешивание, моментальная оплата.
            Работаем с частными лицами и организациями.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="#calculator">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#prices">Посмотреть цены</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-heading font-bold text-white">15+</p>
              <p className="text-sm text-white/50 mt-1">лет на рынке</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-white">50K+</p>
              <p className="text-sm text-white/50 mt-1">тонн в год</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-white">24/7</p>
              <p className="text-sm text-white/50 mt-1">приём заявок</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
