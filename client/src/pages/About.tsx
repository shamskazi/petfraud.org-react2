import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={`${t('about.title')} - PetFraud.org`}
        description={t('about.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <article className="prose prose-lg max-w-none mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">{t('about.title')}</h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-foreground">{t('about.history')}</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                {t('about.content.intro')}
              </p>
              <p className="text-muted-foreground">
                {t('about.content.experience')}
              </p>
              <p className="text-muted-foreground">
                {t('about.content.foundation')}
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-foreground">{t('about.mission')}</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                {t('about.content.purpose')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{t('about.content.objectives.identify')}</li>
                <li>{t('about.content.objectives.report')}</li>
                <li>{t('about.content.objectives.stop')}</li>
                <li>{t('about.content.objectives.support')}</li>
              </ul>
              <p className="text-muted-foreground">
                {t('about.content.impact')}
              </p>
              <p className="text-muted-foreground">
                {t('about.content.strategy')}
              </p>
              <p className="text-muted-foreground">
                {t('about.content.closing')}
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
