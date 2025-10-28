import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '', consent: false });
  };

  const scrollToForm = () => {
    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Увеличивайте ваш доход с партнерской программой Gx2Invest
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Получайте до <span className="font-bold text-3xl">50%</span> от комиссий полученных с клиентов.<br />
              Ваша экспертиза — наш надежный бэкенд.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Стать партнером
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            Почему агенты выбирают Gx2Invest?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((benefit, index) => (
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

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            Начать зарабатывать с нами — просто
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                number: '01',
                title: 'Оставьте заявку',
                description: 'Заполните форму и пройдите краткое собеседование с нашим менеджером'
              },
              {
                number: '02',
                title: 'Получите доступ',
                description: 'Личный кабинет и обучающие материалы для успешного старта'
              },
              {
                number: '03',
                title: 'Привлекайте клиентов',
                description: 'Используйте наши инструменты и вашу экспертизу для привлечения клиентов'
              },
              {
                number: '04',
                title: 'Получайте вознаграждение',
                description: 'Прозрачные условия и своевременные выплаты'
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-heading font-bold text-primary/20 min-w-[80px]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Помогайте клиентам эффективнее делать накопления, а сами зарабатывайте — больше
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Развивайте свой бизнес, предлагая клиентам профессиональные услуги по инвестированию и финансовому планированию. Вы консультируете и составляете планы, а мы берем на себя всю техническую и аналитическую работу по управлению активами на фондовых рынках России и мира.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            Ответы на ваши вопросы
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Как часто происходят выплаты?',
                  answer: 'Выплаты производятся ежемесячно в течение 5 рабочих дней после окончания отчетного периода.'
                },
                {
                  question: 'Какой минимальный порог для вывода средств?',
                  answer: 'Минимальный порог для вывода средств составляет 10 000 рублей. При достижении этой суммы вы можете запросить выплату в любое время.'
                },
                {
                  question: 'Кто может стать вашим партнером?',
                  answer: 'Партнерами могут стать финансовые консультанты, независимые агенты, бизнес-тренеры и эксперты в области финансов, имеющие клиентскую базу или опыт работы с клиентами.'
                },
                {
                  question: 'Какие именно инструменты для продаж вы предоставляете?',
                  answer: 'Мы предоставляем готовые презентации, брифы для клиентов, обучающие материалы, доступ к CRM-системе и персонального менеджера для консультаций.'
                },
                {
                  question: 'Как рассчитывается мое вознаграждение?',
                  answer: 'Вы получаете 50% от комиссии компании, полученной с привлеченного вами клиента. Расчет производится автоматически и отображается в личном кабинете в реальном времени.'
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg font-heading font-semibold text-card-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="partner-form" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
              Готовы зарабатывать больше вместе с надежным партнером?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Присоединяйтесь к программе и начните получать доход от вашей клиентской базы уже сейчас.
            </p>
          </div>
          
          <Card className="max-w-xl mx-auto p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">Имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox 
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Согласен на обработку персональных данных в соответствии с{' '}
                  <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                </Label>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Gx2Invest</h3>
              <p className="text-primary-foreground/80">
                Профессиональные инвестиционные решения для вашего успеха
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Email: partners@gx2invest.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Ссылки</h4>
              <div className="space-y-2">
                <a href="https://gx2invest.ru/" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Основной сайт
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Договор оферты
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Gx2Invest. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
