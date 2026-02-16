import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const metalTypes = [
  { id: "steel", name: "Сталь (3А)", price: 22500 },
  { id: "cast-iron", name: "Чугун", price: 20000 },
  { id: "copper", name: "Медь (блеск)", price: 680000 },
  { id: "copper-mix", name: "Медь (микс)", price: 620000 },
  { id: "aluminum", name: "Алюминий (электротех)", price: 145000 },
  { id: "aluminum-mix", name: "Алюминий (микс)", price: 95000 },
  { id: "brass", name: "Латунь", price: 380000 },
  { id: "bronze", name: "Бронза", price: 420000 },
  { id: "stainless", name: "Нержавейка", price: 85000 },
  { id: "lead", name: "Свинец", price: 135000 },
  { id: "cable-copper", name: "Кабель медный", price: 420000 },
  { id: "cable-aluminum", name: "Кабель алюминиевый", price: 75000 },
];

const CalculatorSection = () => {
  const [selectedMetal, setSelectedMetal] = useState("");
  const [weight, setWeight] = useState("");

  const metal = metalTypes.find((m) => m.id === selectedMetal);
  const weightNum = parseFloat(weight) || 0;
  const totalPrice = metal ? (metal.price * weightNum) / 1000 : 0;

  return (
    <section id="calculator" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Калькулятор
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Узнайте стоимость вашего лома
          </h2>
          <p className="text-muted-foreground text-lg">
            Выберите тип металла и укажите вес — мы моментально рассчитаем стоимость
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="metal-type" className="text-sm font-medium mb-2 block">
                  Тип металла
                </Label>
                <Select value={selectedMetal} onValueChange={setSelectedMetal}>
                  <SelectTrigger id="metal-type" className="h-12">
                    <SelectValue placeholder="Выберите тип металла" />
                  </SelectTrigger>
                  <SelectContent>
                    {metalTypes.map((metal) => (
                      <SelectItem key={metal.id} value={metal.id}>
                        <span className="flex items-center justify-between w-full gap-4">
                          {metal.name}
                          <span className="text-muted-foreground text-xs">
                            {metal.price.toLocaleString("ru-RU")} ₽/т
                          </span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="weight" className="text-sm font-medium mb-2 block">
                  Вес (кг)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Введите вес в килограммах"
                  className="h-12"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="0"
                  step="0.1"
                />
              </div>

              {metal && weightNum > 0 && (
                <div className="bg-secondary/70 rounded-2xl p-6 animate-fade-in-up">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Тип металла</span>
                    <span className="text-sm font-medium">{metal.name}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Цена за тонну</span>
                    <span className="text-sm font-medium">
                      {metal.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Вес</span>
                    <span className="text-sm font-medium">{weightNum.toLocaleString("ru-RU")} кг</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-lg">Итого</span>
                      <span className="font-heading font-bold text-2xl text-primary">
                        {Math.round(totalPrice).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Button size="lg" className="w-full text-base h-12" asChild>
                <a href="#contacts">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Оставить заявку
                </a>
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            * Указаны ориентировочные цены. Точная стоимость определяется после осмотра и взвешивания.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
