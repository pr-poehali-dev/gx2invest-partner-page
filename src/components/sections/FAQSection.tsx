import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Как часто происходят выплаты?',
      answer: 'Выплаты производятся ежемесячно в течение 10 рабочих дней после окончания отчетного периода.'
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
      answer: 'В первый год агентского договора вы получаете 50% от комиссии компании, полученной с привлеченных вами клиентов. Со второго года агентская комиссия составит 30%. Расчет производится ежемесячно.'
    },
    {
      question: 'Как заключается агентский договор?',
      answer: 'Договор можно заключить в бумажной форме у нас в офисе или подписать с помощью ЭЦП через Диадок'
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
          Ответы на ваши вопросы
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
  );
}