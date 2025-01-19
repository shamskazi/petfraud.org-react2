import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';
import { Button } from "@/components/ui/button";

export function Privacy() {
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
          {t('contact.content')}
        </div>
        <div className="flex justify-center mt-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"> 
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCU2N2aHsxUn6xtACa8NTIKFlpjzlYmnAmm9m1ildFwqHQkA/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('contact.contactButton')}
            </a>
          </Button>
        </div>


      </main>
      <Footer />
    </>
  );
}
