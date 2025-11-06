import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TestimonialsSectionProps {
  onCTAClick: () => void;
}

export default function TestimonialsSection({ onCTAClick }: TestimonialsSectionProps) {
  const reviews = [
    {
      name: 'Алексей Соколов',
      role: 'Финансовый консультант',
      experience: '3 года с Gx2 Invest',
      text: 'Работаю с Gx2 Invest уже третий год. Прозрачная система расчетов, своевременные выплаты и профессиональная поддержка — всё это позволяет мне полностью сосредоточиться на работе с клиентами.',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      role: 'Независимый агент',
      experience: '2 года с Gx2 Invest',
      text: 'Gx2 Invest предоставляет все необходимые инструменты для эффективной работы. Обучающие материалы помогли быстро войти в курс дела, а личный менеджер всегда на связи для решения любых вопросов.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      role: 'Бизнес-тренер',
      experience: '4 года с Gx2 Invest',
      text: 'За 4 года сотрудничества мой доход вырос в 2.5 раза. Компания постоянно развивается, предлагает новые продукты и всегда идет навстречу партнерам. Рекомендую всем коллегам!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
          Отзывы наших партнеров
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Узнайте, что говорят эксперты, которые уже работают с Gx2 Invest
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-border animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6">
                <Icon name="Quote" className="w-10 h-10 text-primary/20" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" className="w-5 h-5 text-[#F97316] fill-[#F97316]" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="border-t border-border pt-6">
                <p className="font-heading font-semibold text-lg text-card-foreground mb-1">
                  {review.name}
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  {review.role}
                </p>
                <p className="text-xs text-primary font-medium">
                  {review.experience}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
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