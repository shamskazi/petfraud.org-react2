import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';
import { Button } from "@/components/ui/button";

export function Members() {
  const { t } = useTranslation();

  const categories = [
    'advocacyAmbassadors',
    'advisoryAllies',
    'strategicAssociates',
    'supportingPartners'
  ];

  return (
    <>
      <SEO 
        title={`${t('members.title')} - LovePetsWisely.org`}
        description={t('members.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{t('members.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('members.description')}</p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-background rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">{t('members.totalMembers')}</h2>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a 
                href="https://forms.gle/oQteRQPbH1FNJUd9A" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('members.joinButton')}
              </a>
            </Button>
          </div>
          {categories.map((category) => (
            <div key={category} className="bg-background rounded-lg border shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">
                {t(`members.categories.${category}.title`)}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {(t(`members.categories.${category}.members`, { returnObjects: true }) as string[]).map(
                  (member: string, index: number) => (
                    <li key={index} className="text-foreground">
                      {member}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
