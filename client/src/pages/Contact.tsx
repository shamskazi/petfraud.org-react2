import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';

export function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={`${t('contact.title')} - PetFraud.org`}
        description={t('contact.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t('contact.title')}</h1>
        <div className="prose max-w-none text-muted-foreground">
          {t('contact.content')}
        </div>
      </main>
      <Footer />
    </>
  );
}
