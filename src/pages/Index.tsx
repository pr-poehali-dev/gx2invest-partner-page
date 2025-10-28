import { useState, useEffect, useRef } from 'react';
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
              className="bg-[#F97316] text-white hover:bg-[#EA580C] text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in" ref={counterRef}>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
                  Профессиональное управление с 2006 года
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    GX2 Invest является частью международной инвестиционно-финансовой группы с активами под управлением более <span className="font-bold text-3xl text-primary">{assetsCounter}</span> млрд.руб.
                  </p>
                  <p className="text-foreground/80">
                    Лицензия Центрального Банка России № 065-12598-001000
                  </p>
                  <div className="pt-6">
                    <Button 
                      onClick={scrollToForm}
                      size="lg" 
                      className="bg-[#F97316] text-white hover:bg-[#EA580C] text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Стать партнером
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 animate-scale-in">
                {[
                  {
                    icon: 'Database',
                    title: 'Все под контролем',
                    description: 'Прозрачные условия, регулярная отчетность о результатах управления в вашем Личном кабинете.'
                  },
                  {
                    icon: 'Users',
                    title: 'Высокие стандарты',
                    description: 'Член Национальной Ассоциации Участников Фондового Рынка с 2006 года'
                  },
                  {
                    icon: 'TrendingUp',
                    title: 'Удобно и выгодно',
                    description: 'Вы не тратите свое время, мы реализуем ваши инвестиционные цели.'
                  },
                  {
                    icon: 'Award',
                    title: 'Экспертиза',
                    description: `Профессиональная команда с более чем с ${yearsCounter}+ летним опытом`
                  }
                ].map((item, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
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
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-[#F97316] text-white hover:bg-[#EA580C] text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Стать партнером
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Помогайте клиентам эффективнее делать накопления, а сами зарабатывайте — больше
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Развивайте свой бизнес, предлагая клиентам профессиональные услуги по инвестированию и финансовому планированию. Вы консультируете и составляете планы, а мы берем на себя всю техническую и аналитическую работу по управлению активами на фондовых рынках России и мира.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-[#F97316] text-white hover:bg-[#EA580C] text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Стать партнером
            </Button>
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
                  answer: 'Партнерами могут стать финансовые консультанты, независимые агенты, бизнес-тренеры и эксперты в области финансов, оказывающие бухгалтерские услуги, имеющие клиентскую базу или опыт работы с клиентами.'
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
            Отзывы наших партнеров
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Узнайте, что говорят эксперты, которые уже работают с Gx2Invest
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Алексей Соколов',
                role: 'Финансовый консультант',
                experience: '3 года с Gx2Invest',
                text: 'Работаю с Gx2Invest уже третий год. Прозрачная система расчетов, своевременные выплаты и профессиональная поддержка — всё это позволяет мне полностью сосредоточиться на работе с клиентами.',
                rating: 5
              },
              {
                name: 'Мария Петрова',
                role: 'Независимый агент',
                experience: '2 года с Gx2Invest',
                text: 'Gx2Invest предоставляет все необходимые инструменты для эффективной работы. Обучающие материалы помогли быстро войти в курс дела, а личный менеджер всегда на связи для решения любых вопросов.',
                rating: 5
              },
              {
                name: 'Дмитрий Волков',
                role: 'Бизнес-тренер',
                experience: '4 года с Gx2Invest',
                text: 'За 4 года сотрудничества мой доход вырос в 2.5 раза. Компания постоянно развивается, предлагает новые продукты и всегда идет навстречу партнерам. Рекомендую всем коллегам!',
                rating: 5
              }
            ].map((review, index) => (
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
              onClick={scrollToForm}
              size="lg" 
              className="bg-[#F97316] text-white hover:bg-[#EA580C] text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Стать партнером
            </Button>
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

      <footer className="bg-secondary text-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start mb-12">
            <div className="flex gap-4">
              <a href="https://vk.com/gx2invest" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110" aria-label="VKontakte">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.77c-.42.45-1.19.62-1.95.62h-.62c-.64 0-.83-.29-1.67-1.13-.85-.87-1.23-1-1.45-1-.31 0-.4.09-.4.52v.93c0 .25-.08.4-1.17.4-1.79 0-3.77-1.08-5.17-3.1-2.09-2.93-2.66-5.13-2.66-5.58 0-.22.09-.43.52-.43h.93c.39 0 .54.18.69.6.77 2.16 2.07 4.05 2.6 4.05.2 0 .29-.09.29-.6v-2.31c-.06-.99-.58-1.08-.58-1.43 0-.18.15-.35.39-.35h1.46c.33 0 .45.18.45.56v3.13c0 .33.15.45.24.45.2 0 .36-.12.73-.49 1.13-1.27 1.94-3.23 1.94-3.23.11-.22.28-.43.72-.43h.93c.56 0 .68.29.56.68-.21.94-2.29 3.77-2.29 3.77-.17.27-.23.39 0 .71.17.23.73.72 1.11 1.15.68.78 1.21 1.43 1.35 1.89.14.45-.07.68-.64.68z"/>
                </svg>
              </a>
              <a href="https://t.me/gx2invest" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110" aria-label="Telegram">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a href="https://dzen.ru/gx2invest" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110" aria-label="Яндекс Дзен">
                <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </a>
            </div>
            <div className="text-right">
              <a href="tel:+78007751376" className="block text-2xl font-heading font-semibold hover:text-primary transition-colors mb-2">
                +7 (800) 775-13-76
              </a>
              <a href="mailto:partners@gx2invest.ru" className="block text-lg text-muted-foreground hover:text-primary transition-colors">
                partners@gx2invest.ru
              </a>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Изложенная на этом сайте информация содержит общий обзор продуктов и услуг, предлагаемых АО «Джи Экс Ту Инвест» (торговая марка GX2Invest, далее GX2Invest). Информация предназначена исключительно для внимания лиц, которым она адресована{' '}
              <a href="https://gx2invest.ru/informations/disclaimer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Подробнее
              </a>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <a href="https://gx2invest.ru/informations/protection-policy" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors mb-2">
                Политика защиты и обработки персональных данных
              </a>
              <a href="https://gx2invest.ru/informations/cookies-policy" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Политика в отношении файлов cookies
              </a>
            </div>
            
            <div>
              <a href="https://gx2invest.ru/" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Основной сайт
              </a>
            </div>
          </div>
          
          <div className="border-t border-muted pt-8">
            <p className="text-sm text-muted-foreground">
              © 2006 - 2025 GX2 INVEST Лицензия Центрального банка России № 065-12598-001000
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}