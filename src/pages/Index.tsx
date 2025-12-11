import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: 'Zap',
      title: 'KillAura',
      description: 'Автоматическая атака ближайших мобов и игроков'
    },
    {
      icon: 'Eye',
      title: 'ESP / Wallhack',
      description: 'Видимость игроков и мобов сквозь стены'
    },
    {
      icon: 'Compass',
      title: 'Fly',
      description: 'Свободный полет в режиме выживания'
    },
    {
      icon: 'Target',
      title: 'Aimbot',
      description: 'Автоматическое наведение на цели'
    },
    {
      icon: 'Lightbulb',
      title: 'Fullbright',
      description: 'Полная яркость без факелов'
    },
    {
      icon: 'Shield',
      title: 'Anti-Knockback',
      description: 'Защита от отталкивания'
    },
    {
      icon: 'Footprints',
      title: 'Speed',
      description: 'Увеличенная скорость передвижения'
    },
    {
      icon: 'Package',
      title: 'X-Ray',
      description: 'Видимость ценных руд сквозь блоки'
    }
  ];

  const installSteps = [
    {
      number: 1,
      title: 'Установите Java 17',
      description: 'Скачайте и установите Java 17 - это обязательное требование для работы DenoV'
    },
    {
      number: 2,
      title: 'Скачайте клиент',
      description: 'Нажмите кнопку "Скачать" и распакуйте архив'
    },
    {
      number: 3,
      title: 'Переместите в папку versions',
      description: 'Скопируйте папку с версией DenoV в .minecraft/versions'
    },
    {
      number: 4,
      title: 'Запустите через лаунчер',
      description: 'Откройте Minecraft Launcher, выберите версию DenoV и запустите игру'
    }
  ];

  const updates = [
    {
      version: 'v1.1',
      date: '11 декабря 2024',
      changes: [
        'Улучшена производительность ESP',
        'Исправлены краши на версии 1.16.5',
        'Обновлен интерфейс меню',
        'Добавлены новые настройки Speed'
      ]
    },
    {
      version: 'v1.0',
      date: '1 декабря 2024',
      changes: [
        'Первый релиз DenoV',
        'Поддержка Minecraft 1.16.5',
        'Базовые модули: KillAura, ESP, Fly, X-Ray',
        'Поддержка Forge и Fabric'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center">
              <Icon name="Sword" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DenoV
            </span>
          </div>

          <div className="hidden md:flex gap-6">
            {['home', 'download', 'features', 'install', 'updates'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'download' && 'Скачать'}
                {section === 'features' && 'Функции'}
                {section === 'install' && 'Установка'}
                {section === 'updates' && 'Обновления'}
              </button>
            ))}
          </div>

          <Badge variant="outline" className="border-primary text-primary">
            v1.1
          </Badge>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4">
            <Badge className="bg-primary/20 text-primary border-primary/50 px-4 py-1">
              🔥 Бесплатный чит-клиент
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-red-500 to-secondary bg-clip-text text-transparent leading-tight">
            DENOV
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мощный чит-клиент для Minecraft с расширенными возможностями. 
            Полностью бесплатный и безопасный.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold px-8 py-6 text-lg"
              onClick={() => scrollToSection('download')}
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection('features')}
            >
              Посмотреть функции
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur p-6 border-border hover:border-primary transition-all hover-scale">
              <Icon name="Users" size={32} className="text-primary mb-3 mx-auto" />
              <h3 className="font-bold text-xl mb-2">50,000+</h3>
              <p className="text-muted-foreground">Активных пользователей</p>
            </Card>
            <Card className="bg-card/50 backdrop-blur p-6 border-border hover:border-primary transition-all hover-scale">
              <Icon name="Sparkles" size={32} className="text-primary mb-3 mx-auto" />
              <h3 className="font-bold text-xl mb-2">40+ Модулей</h3>
              <p className="text-muted-foreground">Уникальных функций</p>
            </Card>
            <Card className="bg-card/50 backdrop-blur p-6 border-border hover:border-primary transition-all hover-scale">
              <Icon name="Shield" size={32} className="text-primary mb-3 mx-auto" />
              <h3 className="font-bold text-xl mb-2">100% Бесплатно</h3>
              <p className="text-muted-foreground">Без подписок</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Скачать DenoV
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите версию для вашего клиента Minecraft
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 border-2 border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                  <Icon name="Package" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">Forge</h3>
                  <Badge variant="outline" className="text-xs">Minecraft 1.20.4</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Клиент-версия для Minecraft 1.16.5 (требуется Java 17)
              </p>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать Forge
              </Button>
            </Card>

            <Card className="p-8 border-2 border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                  <Icon name="Box" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">Fabric</h3>
                  <Badge variant="outline" className="text-xs">Minecraft 1.16.5</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Альтернативная сборка (требуется Java 17)
              </p>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать Fabric
              </Button>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <div className="flex gap-3">
              <Icon name="AlertCircle" size={24} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Важная информация</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Обязательно требуется Java 17</li>
                  <li>• Используйте клиент на свой страх и риск</li>
                  <li>• Возможен бан на серверах с античитом</li>
                  <li>• Рекомендуется для одиночной игры и приватных серверов</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Функции клиента
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Более 40 модулей для полного контроля над игрой
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 border-border hover:border-primary transition-all hover-scale bg-card/50 backdrop-blur"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded mb-4 flex items-center justify-center">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">И многое другое...</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="List" size={18} className="mr-2" />
              Полный список функций
            </Button>
          </div>
        </div>
      </section>

      <section id="install" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Как установить
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простая установка за 4 шага
          </p>

          <div className="space-y-6">
            {installSteps.map((step) => (
              <Card 
                key={step.number}
                className="p-6 border-border hover:border-primary transition-all bg-card/50 backdrop-blur"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-black text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/10 border border-primary rounded-lg">
            <div className="flex gap-3">
              <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Нужна помощь?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Присоединяйтесь к нашему Discord серверу для получения поддержки
                </p>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Discord сервер
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="updates" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Обновления
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            История последних изменений
          </p>

          <div className="space-y-6">
            {updates.map((update, index) => (
              <Card 
                key={index}
                className="p-8 border-border hover:border-primary transition-all bg-card/50 backdrop-blur"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-primary text-white text-lg px-4 py-1">
                    {update.version}
                  </Badge>
                  <span className="text-muted-foreground">{update.date}</span>
                </div>
                <ul className="space-y-3">
                  {update.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center">
              <Icon name="Sword" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold">CrimsonHack</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Бесплатный чит-клиент для Minecraft
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="sm">
              <Icon name="Github" size={18} className="mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Discord
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Youtube" size={18} className="mr-2" />
              YouTube
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-8">
            © 2024 DenoV. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;