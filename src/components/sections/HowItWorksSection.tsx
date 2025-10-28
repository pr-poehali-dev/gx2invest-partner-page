import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HowItWorksSectionProps {
  onCTAClick: () => void;
}

export default function HowItWorksSection({ onCTAClick }: HowItWorksSectionProps) {
  const steps = [
    {
      number: '01',
      icon: 'FileText',
      title: 'Заполните заявку',
      description: 'Оставьте заявку на партнерство через форму на сайте'
    },
    {
      number: '02',
      icon: 'Users',
      title: 'Пройдите собеседование',
      description: 'с нашим менеджером и узнайте все детали программы'
    },
    {
      number: '03',
      icon: 'GraduationCap',
      title: 'Получите обучение',
      description: 'Пройдите обучение по продуктам и инструментам продаж'
    },
    {
      number: '04',
      icon: 'Rocket',
      title: 'Начните зарабатывать',
      description: 'Привлекайте клиентов и получайте вознаграждение'
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Как стать партнером?
          </h2>
          <p className="text-xl text-muted-foreground">
            Четыре простых шага до начала сотрудничества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-border animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 text-6xl font-heading font-bold text-primary/5">
                {step.number}
              </div>
              
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                <Icon name={step.icon} className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground relative z-10">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {step.description}
              </p>
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