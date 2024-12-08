import { useTranslation } from 'react-i18next';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="text-center">
          <AspectRatio ratio={16/9} className="mb-8">
            <img
              src="/images/hero/petscamhero.jpg"
              alt="Pet Protection"
              width={1280}
              height={720}
              className="rounded-lg object-cover"
            />
          </AspectRatio>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl my-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </div>
  );
}
