import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import { LinkAtom } from '@/components/atoms/Link/Link';
import { ImageAtom } from '@/components/atoms/Image/Image';
import { TypographyAtom } from '@/components/atoms/Typography/Typography';
import { TimeLine } from '@/components/molecules/TimeLine/TimeLine';
import { Tools } from '@/components/molecules/Tools/Tools';
import { buttonsProjects } from './utils/projects.utils';

import ActosoftImg from '../../../assets/actosoft.png';

import styles from './Projects.module.css';
import type { ProjectsProps } from './Projects.types';

export const Projects = ({ dataProjects, translateKey = 'projects' }: ProjectsProps) => {
  const { t } = useTranslation();

  return (
    <section className={styles.containerProjects}>
      <div className={styles.containerMainProjects}>
        <TimeLine translationText={t('timeline.projects')} />

        {dataProjects?.map((project) => {
          const dataButtons = buttonsProjects(project);

          return (
            <article
              key={project.id}
              className={`group ${styles.containerRenderProjects} ${project?.disabled ? 'disabled:group' : ''}`}
            >
              {project?.disabled && (
                <div className={`group-hover:opacity-0 ${styles.containerCardDisabled}`}>
                  <Clock className={styles.iconClockDisabled} />
                </div>
              )}

              <div
                className={`${styles.containerCardContent} ${
                  project?.disabled && styles.containerCardContentDisabled
                }`}
              >
                <div className={styles.containerCardImg}>
                  {project?.refWork && (
                    <div className={styles.containerImgActosoft}>
                      <ImageAtom src={ActosoftImg} className={styles.imgActosoft} alt="Actosoft" />
                    </div>
                  )}

                  <ImageAtom
                    src={project?.img}
                    className={styles.imgProjects}
                    alt={project?.title}
                  />
                </div>
              </div>

              <div
                className={`${styles.containerCardText} ${
                  project?.disabled && styles.containerCardContentDisabled
                }`}
              >
                <TypographyAtom variant="text" className={styles.titleProjects}>
                  {project?.title}
                </TypographyAtom>

                <TypographyAtom variant="text" className={styles.descriptionProjects}>
                  {project?.descriptionKey && t(`${translateKey}.${project.descriptionKey}`)}
                </TypographyAtom>

                <Tools data={project} />

                <footer className={styles.footerProjects}>
                  {dataButtons?.map((btn, index) => (
                    <LinkAtom
                      key={index}
                      disabled={btn?.disabled}
                      href={btn?.disabled ? undefined : btn.href}
                      className={styles.linkProjects}
                    >
                      {btn.icon}

                      <TypographyAtom variant="text" className={styles.linkTextProjects}>
                        {t(`projectsButtons.${btn.keyText}`)}
                      </TypographyAtom>
                    </LinkAtom>
                  ))}
                </footer>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
