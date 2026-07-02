import { useTranslation } from 'react-i18next';

import { TypographyAtom } from '@/components/atoms/Typography/Typography';
import { ImageAtom } from '@/components/atoms/Image/Image';

import styles from './Gallery.module.css';

const TITLES = [
  { color: '#60a5fa', key: 'titleOne' },
  { color: '#10b981', key: 'titleTwo' },
] as const;

export interface FormattedGalleryItem {
  id: number;
  file: string;
}

export interface GalleryProps {
  formattedGallery: FormattedGalleryItem[];
}

export const Gallery = ({ formattedGallery }: GalleryProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.containerMainGallery}>
      <div className={styles.containerTitleGallery}>
        {TITLES.map(({ color, key }) => {
          return (
            <TypographyAtom
              variant="text"
              key={key}
              className={styles.titleGallery}
              textProps={{ style: { color } }}
            >
              {t(`gallery.${key}`)}
            </TypographyAtom>
          );
        })}
      </div>

      <section className={styles.containerImages}>
        {formattedGallery?.map(({ id, file }) => (
          <ImageAtom className={styles.imgGallery} key={id} src={file} />
        ))}
      </section>
    </div>
  );
};
