import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ProductsSectionProps {
  onCTAClick: () => void;
}

export default function ProductsSection({ onCTAClick }: ProductsSectionProps) {
  const products = [
    {
      icon: 'TrendingUp',
      title: 'Доверительное управление',
      description: 'Индивидуальные инвестиционные стратегии под цели клиента',
      features: [
        'Минимальная сумма от 3 млн руб',
        'Стратегии от консервативных до агрессивных',
        'Доступ к российским и международным рынкам'
      ],
      link: {
        text: 'Примеры управления',
        url: 'https://gx2invest.ru/#strategies'
      }
    },
    {
      icon: 'Wallet',
      title: 'Индивидуальный Инвестиционный Счет (ИИС)',
      description: 'Профессиональное управление с налоговыми льготами',
      features: [
        'Минимальная сумма от 400 тыс руб',
        'Налоговые льготы: вычет до 52 тыс руб/год или освобождение от налога на доход',
        'Диверсификация рисков и регулярная ребалансировка портфеля'
      ],
      link: {
        text: 'Доходность ИИС',
        url: 'https://gx2invest.ru/iis'
      }
    },
    {
      icon: 'Shield',
      title: 'Консультационные услуги',
      description: 'Экспертная поддержка в финансовых вопросах',
      features: [
        'Анализ текущего портфеля',
        'Построение инвестиционной стратегии',
        'Подбор оптимальных инструментов'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Какие продукты вы будете продавать?
          </h2>
          <p className="text-xl text-muted-foreground">
            Широкий выбор инвестиционных решений для разных типов клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={product.icon} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              <ul className="space-y-3 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {product.link && (
                <a 
                  href={product.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                >
                  {product.link.text}
                  <Icon name="ExternalLink" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={onCTAClick}
            size="lg" 
            className="bg-[#F97316] text-white hover:bg-[#EA580C] text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Стать партнером
          </Button>
        </div>
      </div>
    </section>
  );
}