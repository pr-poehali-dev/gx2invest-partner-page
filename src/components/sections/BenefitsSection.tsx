import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Высокий доход',
      description: '50% от комиссий компании с клиента'
    },
    {
      icon: 'Eye',
      title: 'Прозрачность',
      description: 'Простой и понятный расчет вознаграждения'
    },
    {
      icon: 'GraduationCap',
      title: 'Экспертная поддержка',
      description: 'Обучение продуктам и продажам'
    },
    {
      icon: 'Briefcase',
      title: 'Готовые инструменты',
      description: 'Презентации, брифы и другие материалы'
    },
    {
      icon: 'Building2',
      title: 'Комфортные встречи',
      description: 'Офисы для переговоров в Москве и Екатеринбурге'
    },
    {
      icon: 'Globe',
      title: 'Широкие возможности',
      description: 'Инвестиционные решения на российском и зарубежных рынках'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
          Почему агенты выбирают Gx2Invest?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-card animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={benefit.icon} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
