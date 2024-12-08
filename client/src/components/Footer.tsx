import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about.title')}</h3>
            <p className="text-muted-foreground">{t('footer.about.description')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
            <p className="text-muted-foreground">{t('footer.contact.description')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  {t('footer.legal.privacy')}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">
                  {t('footer.legal.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} PetFraud.org. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
