import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Flame" size={18} className="text-white" />
            </div>
            <span className="font-heading font-bold text-lg text-white tracking-tight">
              ВТРРЕСУРС
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">
              Приём металла
            </a>
            <a href="#calculator" className="text-sm text-white/50 hover:text-white transition-colors">
              Калькулятор
            </a>
            <a href="#prices" className="text-sm text-white/50 hover:text-white transition-colors">
              Цены
            </a>
            <a href="#about" className="text-sm text-white/50 hover:text-white transition-colors">
              О нас
            </a>
            <a href="#contacts" className="text-sm text-white/50 hover:text-white transition-colors">
              Контакты
            </a>
          </nav>

          <p className="text-sm text-white/30">
            &copy; 2026 ООО «ВТРРЕСУРС»
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;