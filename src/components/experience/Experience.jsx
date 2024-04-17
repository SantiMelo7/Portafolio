import { EXPERIENCE } from "../../const/experience";
import { useLineTitle } from "../../hooks/useTraduccion";
import Title from "../technologies/Title";

export default function Experience() {
  const { t2 } = useLineTitle();
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
                  {text.time}
                </time>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {text.title}
                </h3>
                <p
                  className="mb-4 mt-2 text-lg font-extrabold lg:max-w-screen-md
                  md:max-w-2xl sm:max-w-screen-sm text-gray-950 dark:text-white "
                >
                  {text.description}
                </p>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
}
