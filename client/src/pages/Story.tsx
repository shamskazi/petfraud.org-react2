import { useTranslation } from 'react-i18next';
import { StoryContent } from '../components/StoryContent';
import { useRoute } from 'wouter';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../lib/seo';

export function Story() {
  const { t } = useTranslation();
  const [match, params] = useRoute("/:lang/stories/:storyId");
  const storyId = params?.storyId;
  
  if (!match) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16 px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('stories.notFound')}</h1>
        </main>
        <Footer />
      </>
    );
  }
  
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

  const story = stories.find(s => s.id === storyId);

  if (!story) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16 px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Story Not Found</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${story.title} - LovePetsWisely.org`}
        description={story.description}
        image={story.storyImage}
      />
      <Navbar />
      <main className="min-h-screen pt-16 mt-16">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src={story.storyImage}
                alt={story.storyImageAlt}
                loading="lazy"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <h1 className="text-4xl font-bold mb-6">{story.title}</h1>
            <h2 className="text-2xl text-muted-foreground mb-8">{story.subtitle}</h2>
            <p className="text-xl text-muted-foreground">{story.description}</p>
          </header>
          
          <StoryContent 
            content={t(`stories.storyContent.${storyId}.content`, { 
              defaultValue: t('stories.notFound') 
            })} 
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
