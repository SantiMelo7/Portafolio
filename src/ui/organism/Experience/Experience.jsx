/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useTranslations } from "next-intl";

import { TitleLine } from "../../atoms";
import { CardExperience } from "../../molecules";

import { dataExperience } from "../../../util/helpers/dataExperience";

import "./Experience.styled.css";

const Experience = () => {
  const translationsExperience = useTranslations("Experience");

  return (
    <section className="section-main-experience">
      <TitleLine translationKey="experiencie" />

      <div className="container-main-experience">
        <ol className="ol-data-experience">
          {dataExperience(translationsExperience)?.map((exp) => (
            <CardExperience
              key={exp.id}
              experience={exp}
              translationsExperience={translationsExperience}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
