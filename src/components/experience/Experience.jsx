/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { EXPERIENCE } from "../../const/experience";
import { useExperience, useLineTitle } from "../../hooks/useTraduccion";
import Title from "../technologies/Title";
import ToolsInExperience from "./ToolsInExperience";
import ReferenceExperience from "./ReferenceExperience";

export default function Experience() {
  const { t2 } = useLineTitle();
  const { t, t22, t23, t1, t3, t4, t5, t6, t7, t8 } = useExperience();

  const getTime = (id) => {
    switch (id) {
      case 1:
        return t("time-1");
      case 2:
        return t1("time-2");
      case 3:
        return t22("time-3");
      case 4:
        return t23("time-4");
      default:
        return "";
    }
  };

  const getTitle = (id) => {
    switch (id) {
      case 1:
        return t3("title-experience-1");
      case 2:
        return t4("title-experience-2");
      default:
        return "";
    }
  };

  const getDescription = (id) => {
    switch (id) {
      case 1:
        return t5("description-experience-1");
      case 2:
        return t6("description-experience-2");
      case 3:
        return t7("description-experience-3");
      case 4:
        return t8("description-experience-4");
      default:
        return "";
    }
  };

  return (
    <>
      <div className="mt-10 w-[90%] lg:w-[75%] mx-auto">
        <Title title={t2("title-experience-line")} />
      </div>
      <div className="flex justify-center items-center flex-col md:max-w-full md:p-0 max-w-screen-md p-6">
        <div className="mt-10">
          <ol className="relative  border-l-[2px] dark:border-l-[1.5px] border-amber-700 dark:border-amber-200">
            {EXPERIENCE.map((text) => (
              <div key={text.id} className="mt-1">
                <li className="container-content-experience">
                  <div className="circle-for-experience" />
                  <time className="time-experience">{getTime(text.id)}</time>
                  <h3 className="title-experience">{getTitle(text.id)}</h3>
                  {text.id === 4 && (
                    <>
                      <div className="container-content-actosoft">
                        {text.id === 4 && (
                          <ToolsInExperience />
                        )}
                      </div>
                      <ReferenceExperience />
                    </>
                  )}
                  <p className="mb-4 mt-4 text-lg font-extrabold lg:max-w-screen-md md:max-w-2xl max-w-screen-sm text-gray-950 dark:text-white">
                    {getDescription(text.id)}
                  </p>
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
