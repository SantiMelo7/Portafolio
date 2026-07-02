import { useTranslation } from 'react-i18next';
import { TimeLine } from '@/components/molecules/TimeLine/TimeLine';
import { Tools } from '@/components/molecules/Tools/Tools';
import styles from './Technologies.module.css';

export const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.containerTechnologies}>
      <TimeLine translationText={t('timeline.technologies')} />

      <Tools technologies />
    </section>
  );
};
