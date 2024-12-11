
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';

export function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={`${t('contact.title')} - LovePetsWisely.org`}
        description={t('contact.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <article className="prose prose-lg max-w-none mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">{t('contact.title')}</h1>
          
          <section className="mb-12">
            <p className="text-muted-foreground text-center">
              {t('contact.content')}
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
