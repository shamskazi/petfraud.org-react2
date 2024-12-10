import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Hero } from '../components/Hero';
import { JoinForm } from '../components/JoinForm';
import { Faq } from '../components/Faq';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>LovePetsWisely.org - {t('hero.title')}</title>
        <meta name="description" content={t('hero.description')} />
        <meta property="og:title" content={`LovePetsWisely.org - ${t('hero.title')}`} />
        <meta property="og:description" content={t('hero.description')} />
        <meta property="og:image" content="/images/hero/petscamhero.jpg" />
      </Helmet>

      <Navbar />
      <main className="min-h-screen pt-16">
        <Hero />
        <JoinForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
