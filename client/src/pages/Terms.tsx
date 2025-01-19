
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';

export function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={`${t('terms.title')} - LovePetsWisely.org`}
        description={t('terms.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <h1 className="flex justify-center text-4xl font-bold mb-8">{t('terms.title')}</h1>
        <div className="prose max-w-none text-muted-foreground mb-4">
          {t('terms.effectiveDate')}
        </div>
        <div className="prose max-w-none text-foreground mb-8">
          {t('terms.welcomeMessage')}
        </div>
        <div className="space-y-8">
          {[...Array(18)].map((_, i) => (
            <section key={i + 1} className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t(`terms.sections.${i + 1}.title`)}
              </h2>
              <p className="text-muted-foreground">
                {t(`terms.sections.${i + 1}.content`)}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
