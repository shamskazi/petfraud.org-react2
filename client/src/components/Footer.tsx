import { useTranslation } from 'react-i18next';

export function Footer() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <footer className="bg-muted/50 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center text-muted-foreground">
          <a href={`/${currentLanguage}/terms`} className="mx-2">Terms</a>
          <span>|</span>
          <a href={`/${currentLanguage}/privacy`} className="mx-2">Privacy Policy</a>
          <span>|</span>
          <a href={`/${currentLanguage}/accessibility`} className="mx-2">Accessibility Policy</a>
          <span>|</span>
          <a href={`/${currentLanguage}/cookienotice`} className="mx-2">Cookie Notice</a>
          <span>|</span>
          <a href={`/${currentLanguage}/contact`} className="mx-2">Contact</a>
        </div>
        <br />
        <p>© 2025 LovePetsWisely.org. All rights reserved.</p>
      </div>
    </footer>
  );
}