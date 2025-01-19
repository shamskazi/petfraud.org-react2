
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';

export function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={`${t('PrivacyNotice.title')} - LovePetsWisely.org`}
        description={t('PrivacyNotice.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <h1 className="flex justify-center text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none text-muted-foreground mb-4">
          {t('PrivacyNotice.effectiveDate')}
        </div>
        <div className="prose max-w-none text-foreground mb-8">
          {t('PrivacyNotice.commitmentToPrivacy')}
        </div>
        <div className="space-y-8">
          {[...Array(10)].map((_, i) => (
            <section key={i + 1} className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t(`PrivacyNotice.sections.${i + 1}.title`)}
              </h2>
              <div className="text-muted-foreground">
                {Array.isArray(t(`PrivacyNotice.sections.${i + 1}.content`, { returnObjects: true })) ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {(t(`PrivacyNotice.sections.${i + 1}.content`, { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{t(`PrivacyNotice.sections.${i + 1}.content`)}</p>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
