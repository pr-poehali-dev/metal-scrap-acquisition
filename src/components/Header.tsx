import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Приём металла", href: "#services" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Цены", href: "#prices" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Flame" size={18} className="text-white" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">ВТРРЕСУРС</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+79139132558" className="text-sm font-semibold">
            +7 (913) 913-25-58
          </a>
          <Button size="sm" asChild>
            <a href="#calculator">Рассчитать</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b animate-fade-in-up">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+79139132558" className="text-sm font-semibold text-primary pt-2">
              +7 (913) 913-25-58
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;