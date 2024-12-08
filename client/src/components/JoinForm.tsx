import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function JoinForm() {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <a href="https://forms.gle/oQteRQPbH1FNJUd9A" target="_blank" rel="noopener noreferrer">
          {t('join.button')}
        </a>
      </Button>
    </div>
  );
}
