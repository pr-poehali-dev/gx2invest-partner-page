import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
              АО "Джи Экс Ту Инвест"<br />
              <span className="text-sm font-normal">(торговая марка Gx2 Invest)</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <a href="https://gx2invest.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Основной сайт
              </a>
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
                <a href="tel:88007751376" className="hover:text-primary transition-colors">
                  8 800 775 13 76
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="w-4 h-4 text-primary" />
                <a href="mailto:partners@gx2invest.ru" className="hover:text-primary transition-colors">
                  partners@gx2invest.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <a href="https://gx2invest.ru/contacts" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Москва, Екатеринбург
                </a>
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
                <a href="#faq-section" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">
              Мы в соцсетях
            </h4>
            <div className="flex gap-3 flex-wrap">
              <a 
                href="https://t.me/gx2invest" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center hover:bg-[#0088cc]/20 transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="#0088cc" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a 
                href="https://vk.com/gx2invest" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077FF]/10 rounded-full flex items-center justify-center hover:bg-[#0077FF]/20 transition-colors"
                aria-label="VK"
              >
                <svg className="w-5 h-5" fill="#0077FF" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.19h-1.38c-.57 0-.74-.46-1.76-1.48-.89-.89-1.28-1.01-1.5-1.01-.31 0-.4.09-.4.52v1.35c0 .36-.12.58-1.06.58-1.59 0-3.35-.96-4.58-2.75-1.85-2.66-2.36-4.65-2.36-5.06 0-.22.09-.42.52-.42h1.38c.39 0 .54.18.69.59.76 2.21 2.04 4.15 2.56 4.15.2 0 .29-.09.29-.59v-2.29c-.07-1.13-.66-1.22-.66-1.62 0-.18.15-.36.39-.36h2.17c.33 0 .45.18.45.56v3.09c0 .33.15.45.24.45.2 0 .36-.12.73-.49 1.14-1.28 1.95-3.26 1.95-3.26.11-.22.28-.42.71-.42h1.38c.46 0 .56.24.46.56-.17.81-1.93 3.48-1.93 3.48-.17.27-.23.39 0 .7.17.23.73.72 1.1 1.15.68.78 1.2 1.43 1.34 1.88.13.45-.1.67-.56.67z"/>
                </svg>
              </a>
              <a 
                href="https://dzen.ru/gx2invest" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF6163]/10 rounded-full flex items-center justify-center hover:bg-[#FF6163]/20 transition-colors"
                aria-label="Дзен"
              >
                <svg className="w-5 h-5" fill="#FF6163" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.429c4.733 0 8.571 3.838 8.571 8.571S16.733 20.571 12 20.571 3.429 16.733 3.429 12 7.267 3.429 12 3.429zM8.571 9.143v5.714L12 12l-3.429-2.857zm6.858 0L12 12l3.429 2.857V9.143z"/>
                </svg>
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
            <a 
              href="https://gx2invest.ru/informations/protection-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
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