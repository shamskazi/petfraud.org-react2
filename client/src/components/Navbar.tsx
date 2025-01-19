import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu } from "lucide-react";
import { ThemeToggle } from './ThemeToggle';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const navItems = [
    { href: `/${currentLanguage}`, label: t('nav.home') },
    { href: `/${currentLanguage}/stories`, label: t('nav.stories') },
    { href: `/${currentLanguage}/members`, label: t('nav.members') },
    { href: `/${currentLanguage}/about`, label: t('nav.about') },
    { href: `/${currentLanguage}/contact`, label: t('nav.contact') },
  ];

  const scrollDirection = useScrollDirection();
  
  return (
    <nav className={`fixed w-full bg-background/90 backdrop-blur-sm shadow-sm z-50 border-b transition-all duration-500 dark:bg-background/90 ${
      scrollDirection === 'down' ? '-top-20' : 'top-0'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href={`/${currentLanguage}`} className="text-xl font-bold">
              LovePetsWisely<span className="text-primary">.org</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-6">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
