import { useTranslation } from 'react-i18next';

import { TypographyAtom } from '@/components/atoms/Typography/Typography';
import { LinkAtom } from '@/components/atoms/Link/Link';
import { ImageAtom } from '@/components/atoms/Image/Image';
import { TimeLine } from '@/components/molecules/TimeLine/TimeLine';

import JaMexImg from '@/assets/jaMex.jpg';
import ReposImg from '@/assets/repos.webp';
import RefImg from '@/assets/ref.webp';
import ActosoftImg from '@/assets/actosoft.png';
import OrganizationsImg from '@/assets/organizations.webp';

import { dataExperience } from './utils/experience.utils';
import styles from './Experience.module.css';

const jaMexVideoSrc = new URL('../../../assets/YPP amdocs testimonios.MP4', import.meta.url).href;

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.containerExperience}>
      <TimeLine translationText={t('timeline.experience')} />

      <div className={styles.containerContentExperience}>
        <ol className={styles.olDateExperience}>
          {dataExperience?.map((experience) => (
            <li key={experience.id} className={styles.liCardExperience}>
              <div className={styles.circleCardExperience} />

              <time className={styles.timeCardExperience}>
                {t(`experience.${experience.keyTime}`)}
              </time>

              <h3 className={styles.titleCardExperience}>
                {t(`experience.${experience.keyTitle}`)}
              </h3>

              <p className={styles.descriptionCardExperience}>
                {t(`experience.${experience.keyDescription}`)}
              </p>

              {experience?.id === 4 && (
                <>
                  <LinkAtom
                    href="https://www.jamexico.org.mx/"
                    className={styles.linkRefJAExperience}
                  >
                    <ImageAtom
                      src={JaMexImg}
                      className={styles.imgJaMexExperience}
                      alt="Ja México"
                    />
                    <TypographyAtom variant="text">Ja México</TypographyAtom>
                  </LinkAtom>

                  <video
                    className={styles.videoJaMexExperience}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={jaMexVideoSrc} type="video/mp4" />
                    Tu navegador no soporta la reproduccion de video.
                  </video>
                </>
              )}

              {experience?.id === 5 && (
                <>
                  <ImageAtom
                    src={OrganizationsImg}
                    className={styles.imageOrganizations}
                    alt="Organizaciones"
                  />

                  <LinkAtom
                    href="https://actosoft.com.mx/frontend"
                    className={styles.linkRefActosoftExperience}
                  >
                    <ImageAtom
                      src={ActosoftImg}
                      className={styles.imgActosoftExperience}
                      alt="Actosoft"
                    />
                    <TypographyAtom variant="text">Actosoft</TypographyAtom>
                  </LinkAtom>

                  <div className={styles.containerMainRefExperience}>
                    <ImageAtom
                      src={ReposImg}
                      className={styles.imageReposExperience}
                      alt="Repositorios"
                    />
                  </div>

                  <ImageAtom src={RefImg} className={styles.imageRefExperience} alt="Referencias" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
