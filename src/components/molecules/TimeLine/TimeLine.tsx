import { TypographyAtom } from '@/components/atoms/Typography/Typography';

import styles from './TimeLine.module.css';
import type { TimeLineProps } from './TimeLine.types';

export const TimeLine = ({ translationText }: TimeLineProps) => {
  return (
    <>
      <div className={styles.containerTimeLine}>
        <TypographyAtom variant="text" className={styles.lineTitle}>
          {translationText}
        </TypographyAtom>

        <div className={styles.lineTitleBorder} />
      </div>
    </>
  );
};
