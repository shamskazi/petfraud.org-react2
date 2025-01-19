import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';
import { Button } from "@/components/ui/button";
import terms from '../client/src/i18n/translations/en.json'

export function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={`${t('contact.title')} - LovePetsWisely.org`}
        description={t('contact.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <h1 className="flex justify-center text-4xl font-bold mb-8">{t('contact.title')}</h1>
        <div className="prose max-w-none text-muted-foreground">
          {t('terms.effectiveDate')}
        </div>
        <div className="prose max-w-none text-foreground">
          {t('terms.welcomeMessage')}
        </div>
      </main>
      <Footer />
    </>
  );
}