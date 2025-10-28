import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export default function ContactFormSection() {
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

  return (
    <section id="partner-form" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
            Готовы зарабатывать больше вместе с надежным партнером?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Начните получать доход от вашей клиентской базы уже сейчас.
          </p>
        </div>

        <Card className="max-w-xl mx-auto p-8 bg-card/95 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-card-foreground">Имя *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-card-foreground">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-card-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, consent: checked as boolean })
                }
                className="mt-1"
              />
              <Label 
                htmlFor="consent" 
                className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
              >
                Я согласен на обработку персональных данных и принимаю условия политики конфиденциальности
              </Label>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] text-lg py-6"
            >
              Отправить заявку
            </Button>
          </form>
        </Card>

        <p className="text-center text-primary-foreground/70 mt-8 text-sm">
          Заполняя форму, вы соглашаетесь с условиями обработки персональных данных
        </p>
      </div>
    </section>
  );
}