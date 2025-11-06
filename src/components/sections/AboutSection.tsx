import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AboutSectionProps {
  onCTAClick: () => void;
}

export default function AboutSection({ onCTAClick }: AboutSectionProps) {
  const [assetsCounter, setAssetsCounter] = useState(0);
  const [yearsCounter, setYearsCounter] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            let assetsCount = 0;
            const assetsTarget = 42;
            const assetsInterval = setInterval(() => {
              assetsCount += 1;
              setAssetsCounter(assetsCount);
              if (assetsCount >= assetsTarget) {
                clearInterval(assetsInterval);
              }
            }, 30);
            
            let yearsCount = 0;
            const yearsTarget = 20;
            const yearsInterval = setInterval(() => {
              yearsCount += 1;
              setYearsCounter(yearsCount);
              if (yearsCount >= yearsTarget) {
                clearInterval(yearsInterval);
              }
            }, 50);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasAnimated]);

  const features = [
    {
      icon: 'Database',
      title: 'Все под контролем',
      description: 'Прозрачные условия, регулярная отчетность о результатах управления в вашем Личном кабинете.'
    },
    {
      icon: 'Users',
      title: 'Высокие стандарты',
      description: 'Член Национальной Ассоциации Участников Фондового Рынка (НАУФОР) с 2006 года'
    },
    {
      icon: 'Shield',
      title: 'Обслуживание',
      description: 'Индивидуальные решения под каждого клиента'
    },
    {
      icon: 'LineChart',
      title: 'Экспертиза',
      description: 'Профессиональная команда с опытом 20+ лет'
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in" ref={counterRef}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
                Gx2Invest - профессиональный доверительный управляющий
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  АО "Джи Экс Ту Инвест" (торговая марка GX2 Invest) входит в международную финансовую группу с активами под управлением более <span className="font-bold text-3xl text-primary">{assetsCounter}</span> млрд.руб.
                </p>
                <p className="text-foreground/80">
                  Лицензия на деятельность по управлению ценными бумагами Банка России № 065-12598-001000 с 2006 года.
                </p>
                <div className="pt-6">
                  <Button 
                    onClick={onCTAClick}
                    size="lg" 
                    className="bg-[#F97316] text-white hover:bg-[#EA580C] text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Стать партнером
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 bg-card border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}