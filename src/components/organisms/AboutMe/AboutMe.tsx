import { useTranslation } from 'react-i18next';

import { TypographyAtom } from '@/components/atoms/Typography/Typography';
import { ImageAtom } from '@/components/atoms/Image/Image';
import styles from './AboutMe.module.css';

import UserImg from '@/assets/user.png';
import MeImg from '@/assets/santi.webp';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.containerMainAboutMe}>
        <div className={styles.containerFirstContentAboutMe}>
          <ImageAtom src={UserImg} width={80} height={80} alt="User" />

          <TypographyAtom variant="text" className={styles.titleAboutMe}>
            {t('aboutMe.title')}
          </TypographyAtom>
        </div>

        <div className={styles.containerDescriptionAboutMe}>
          <div className={styles.containerDescriptionTextAboutMe}>
            <TypographyAtom variant="text" className={styles.descriptionAboutMe}>
              {t('aboutMe.descriptionOne')}
            </TypographyAtom>

            <TypographyAtom variant="text" className={styles.descriptionAboutMe}>
              {t('aboutMe.descriptionTwo')}
            </TypographyAtom>

            <TypographyAtom variant="text" className={styles.descriptionAboutMe}>
              {t('aboutMe.descriptionThree')}
            </TypographyAtom>
          </div>

          <div className={styles.containerMainBorderImgAboutMe}>
            <div className={styles.borderLayerOne}>
              <div className={styles.borderLayerTwo}>
                <div className={styles.borderLayerThree}>
                  <div className={styles.borderLayerFour}>
                    <ImageAtom src={MeImg} alt="Santi" className={styles.imgInfoMe} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageAtom
        src="https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&section=footer&reversal=true"
        alt="Capsula de color"
        className={styles.imgCapsule}
      />
    </>
  );
};
