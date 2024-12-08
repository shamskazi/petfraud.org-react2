import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';
import { Button } from "@/components/ui/button";

export function Stories() {
  const { t, i18n } = useTranslation();
  const stories = t('stories.storiesList', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    thumbnailAlt: string;
    storyImage: string;
    storyImageAlt: string;
  }>;

  return (
    <>
      <SEO 
        title={`${t('stories.title')} - PetFraud.org`}
        description={t('stories.description')}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('stories.title')}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t('stories.description')}</p>
          <Button asChild>
            <a 
              href="https://docs.google.com/forms/d/1QFmxlB8WWaZVCc3C0vhOxkE3oPNPpJ6bSJ3ldGh3KEM/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t('stories.submitButton')}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <article key={story.id} className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
              <a href={`/${i18n.language}/stories/${story.id}`} className="block hover:opacity-95 transition-opacity">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={story.thumbnail}
                    alt={story.thumbnailAlt}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{story.title}</h2>
                  <h3 className="text-lg text-muted-foreground mb-4">{story.subtitle}</h3>
                  <p className="text-muted-foreground">{story.description}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
