import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
              Gx2Invest
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональное управление активами с 2006 года
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Лицензия ЦБ РФ<br />
              № 065-12598-001000
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="w-4 h-4 text-primary" />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="w-4 h-4 text-primary" />
                <a href="mailto:info@gx2invest.ru" className="hover:text-primary transition-colors">
                  info@gx2invest.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>Москва, Екатеринбург</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">
              Партнерам
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#partner-form" className="hover:text-primary transition-colors">
                  Стать партнером
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Условия программы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Обучение
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">
              Мы в соцсетях
            </h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="VK"
              >
                <Icon name="Share2" className="w-5 h-5 text-primary" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              Подпишитесь на наши каналы, чтобы быть в курсе новостей и акций
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gx2Invest. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
