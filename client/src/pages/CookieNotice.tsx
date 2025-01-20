
import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';

export function Cookie() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={`${t('CookieNotice.title')} - LovePetsWisely.org`}
        description={t('CookieNotice.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <h1 className="flex justify-center text-4xl font-bold mb-8">Cookie Notice</h1>
        <div className="prose max-w-none text-muted-foreground mb-4">
          {t('CookieNotice.effectiveDate')}
        </div>
        <div className="prose max-w-none text-foreground mb-8">
          {t('CookieNotice.cookieNotice.introduction')}
        </div>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('CookieNotice.cookieNotice.whatIsACookie.title')}
            </h2>
            <div className="text-muted-foreground">
              <p>{t('CookieNotice.cookieNotice.whatIsACookie.content')}</p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Types</h2>
            <div className="space-y-4">
              {['i', 'ii', 'iii', 'iv'].map((type) => (
                <div key={type}>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {t(`CookieNotice.cookieNotice.cookieTypes.${type}.title`)}
                  </h3>
                  <p className="text-foreground/80">{t(`CookieNotice.cookieNotice.cookieTypes.${type}.content`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How and Why We Use Cookies</h2>
            <div className="text-muted-foreground space-y-4">
              {Object.keys(t('CookieNotice.cookieNotice.howAndWhyWeUseCookies', { returnObjects: true })).map((key) => (
                <div key={key}>
                  <h3 className="text-xl font-medium mb-2">
                    {t(`CookieNotice.cookieNotice.howAndWhyWeUseCookies.${key}.title`)}
                  </h3>
                  <p>{t(`CookieNotice.cookieNotice.howAndWhyWeUseCookies.${key}.content`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('CookieNotice.cookieNotice.howToManageCookies.title')}
            </h2>
            <div className="text-muted-foreground">
              <p>{t('CookieNotice.cookieNotice.howToManageCookies.content')}</p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('CookieNotice.cookieNotice.cookiePolicyDoesNotCover.title')}
            </h2>
            <div className="text-muted-foreground">
              <p>{t('CookieNotice.cookieNotice.cookiePolicyDoesNotCover.content')}</p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('CookieNotice.cookieNotice.changesToCookieNotice.title')}
            </h2>
            <div className="text-muted-foreground">
              <p>{t('CookieNotice.cookieNotice.changesToCookieNotice.content')}</p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('CookieNotice.cookieNotice.descriptionOfCookiesUsed.title')}
            </h2>
            <div className="text-muted-foreground">
              <p>{t('CookieNotice.cookieNotice.descriptionOfCookiesUsed.content')}</p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('CookieNotice.cookieNotice.contactUs.title')}
            </h2>
            <div className="text-muted-foreground">
              <p>{t('CookieNotice.cookieNotice.contactUs.content')}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
