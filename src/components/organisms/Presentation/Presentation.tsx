import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageAtom } from '@/components/atoms/Image/Image';
import { TypographyAtom } from '@/components/atoms/Typography/Typography';

import MeImg from '@/assets/santi.webp';
import { resourcesMe, highlightedPhrasesByLanguage } from './utils/presentation.utils';
import styles from './Presentation.module.css';

export const Presentation = () => {
  const { t, i18n } = useTranslation();

  const descriptionText = t('presentation.description');
  const languageCode = (i18n.resolvedLanguage || i18n.language || 'es').split('-')[0];

  const getHighlightedDescription = (text: string) => {
    const phrases = highlightedPhrasesByLanguage[languageCode] ?? [];

    if (!phrases.length) return text;

    const content: ReactNode[] = [];
    let remainingText = text;
    let matchIndex = 0;

    while (remainingText.length > 0) {
      let nearestPosition = -1;
      let nearestPhrase = '';

      phrases.forEach((phrase) => {
        const position = remainingText.indexOf(phrase);

        if (position !== -1 && (nearestPosition === -1 || position < nearestPosition)) {
          nearestPosition = position;
          nearestPhrase = phrase;
        }
      });

      if (nearestPosition === -1) {
        content.push(remainingText);
        break;
      }

      if (nearestPosition > 0) {
        content.push(remainingText.slice(0, nearestPosition));
      }

      content.push(
        <span key={`highlight-${matchIndex}`} className={styles.textResalt}>
          {nearestPhrase}
        </span>
      );

      remainingText = remainingText.slice(nearestPosition + nearestPhrase.length);
      matchIndex += 1;
    }

    return content;
  };

  return (
    <section className={styles.containerPresentation}>
      <div className={styles.containerMe}>
        <ImageAtom src={MeImg} alt="Santi" className={styles.imgPresentaton} />

        <div className={styles.containerWork}>
          <TypographyAtom variant="text" className={styles.containerWorkText}>
            {t('presentation.work')}
          </TypographyAtom>
        </div>
      </div>

      <div className={styles.containerDescriptionMe}>
        <TypographyAtom variant="text" className={styles.containerAboutMe}>
          {t('presentation.welcome')}
        </TypographyAtom>

        <div className={styles.containerDescription}>
          <TypographyAtom variant="text" className={styles.textDescription}>
            {getHighlightedDescription(descriptionText)}
          </TypographyAtom>
        </div>

        <div className={styles.containerResources}>
          {resourcesMe?.map((item) => {
            const isExternal = item.url.startsWith('http');

            return (
              <a
                key={item?.key}
                className={styles.buttonResource}
                href={item?.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {item?.component}
                {item?.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
