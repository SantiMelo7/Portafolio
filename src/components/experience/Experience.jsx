import { EXPERIENCE } from "../../const/experience";
import { useExperience, useLineTitle } from "../../hooks/useTraduccion";
import Title from "../technologies/Title";

export default function Experience() {
  const { t2 } = useLineTitle();
  const { t, t22, t1, t3, t4, t5, t6, t7 } = useExperience();
  return (
    <>
      <Title title={t2("title-experience-line")} />
      <div className="flex justify-center items-center">
        <ol className="relative border-l-[2px] dark:border-l-[1.5px] border-amber-700 dark:border-amber-200 mt-10">
          {EXPERIENCE.map((text) => (
            <div key={text.id}>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-800 dark:bg-purple-500 rounded-full mt-1.5 -start-1.5 border border-white" />
                <time className="mb-1 text-xl mt-2 font-bold leading-none text-emerald-800 dark:text-emerald-200">
                  {text.id === 1 && t("time-1")}
                  {text.id === 2 && t1("time-2")}
                  {text.id === 3 && t22("time-3")}
                </time>
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-gray-300">
                  {text.id === 1 && t3("title-experience-1")}
                  {text.id === 2 && t4("title-experience-2")}
                </h3>
                <p
                  className="mb-4 mt-2 text-lg font-extrabold lg:max-w-screen-md
                  md:max-w-2xl sm:max-w-screen-sm text-gray-950 dark:text-white "
                >
                  {text.id === 1 && t5("description-experience-1")}
                  {text.id === 2 && t6("description-experience-2")}
                  {text.id === 3 && t7("description-experience-3")}
                </p>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
}
