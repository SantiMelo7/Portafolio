import { ImageAtom } from '@/components/atoms/Image/Image';
import { TypographyAtom } from '@/components/atoms/Typography/Typography';;
import { dataTechnologies, COLORS_TECHNOLOGIES } from './utils/tools.utils';

import type { ToolsProps } from './Tools.types';
import styles from './Tools.module.css';


export const Tools = ({ data, technologies = false }: ToolsProps) => {
  const dataTools = Array.isArray(data?.tools)
    ? data?.tools
        ?.map((key) => dataTechnologies?.find((item) => item?.text === key))
        ?.filter(Boolean)
    : [];

  const dataTechnology = dataTechnologies?.map((item) => item);

  const dataDefault = technologies ? dataTechnology : dataTools;

  return (
    <div className={technologies ? styles.containerTechnologies : styles.containerTools}>
      <div
        className={technologies ? styles.containerToolsTechnologies : styles.containerToolsContent}
      >
        {dataDefault?.map((tool) => (
          <div
            key={`${data?.id}-${tool?.text}`}
            className={technologies ? styles.containerToolsContentItemTechnologies : ''}
          >
            {technologies && (
              <div className={styles.containerCardCircle}>
                {COLORS_TECHNOLOGIES?.map((color, index) => (
                  <TypographyAtom
                    variant="text"
                    key={index}
                    className={styles.circleCardText}
                    textProps={{ style: { backgroundColor: color } }}
                  >
                    {' '}
                  </TypographyAtom>
                ))}
              </div>
            )}

            <div
              className={
                technologies
                  ? styles.containerToolsContentTechnologies
                  : styles.containerToolsContentItem
              }
            >
              <ImageAtom
                src={tool?.url}
                alt={tool?.text}
                className={technologies ? styles.toolImgTechnologies : styles.toolImg}
              />

              <TypographyAtom
                variant="text"
                className={technologies ? styles.toolTextTechnologies : styles.toolText}
              >
                {tool?.text}
              </TypographyAtom>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
