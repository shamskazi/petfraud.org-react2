import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const { t } = useTranslation();

  const faqItems = ['why', 'how', 'money', 'difference'];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t('faq.title')}
      </h2>
      <Accordion type="single" collapsible>
        {faqItems.map((item, index) => (
          <AccordionItem key={item} value={`item-${index}`}>
            <AccordionTrigger>
              {t(`faq.questions.${item}.question`)}
            </AccordionTrigger>
            <AccordionContent>
              {t(`faq.questions.${item}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
