/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { EXPERIENCE } from "../../const/experience";
import { useExperience, useLineTitle } from "../../hooks/useTraduccion";
import Title from "../technologies/Title";
import ActosoftImg from "../../../public/content/actosoft.png";
import LinkProject from "../projects/LinksProject";
import { TECHNOLOGHIES } from "../../const/tec";
import ReposImg from "../../../public/content/repos.webp"
import RefImg from "../../../public/content/ref.webp"
import { Check, Clock, FolderCog } from "lucide-react";

export default function Experience() {
  const { t2 } = useLineTitle();
  const { t, t22, t23, t1, t3, t4, t44, t5, t6, t7, t8, t9 } = useExperience();
  return (
    <>
      <div className="max-w-[520px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[950px] xl:max-w-[1100px] mt-10 mx-auto">
        <Title title={t2("title-experience-line")} />
      </div>
      <div className="flex justify-center items-center flex-col md:max-w-full md:p-0 max-w-screen-md p-6">
        <div className="mt-10">
          <ol className="relative  border-l-[2px] dark:border-l-[1.5px] border-amber-700 dark:border-amber-200">
            {EXPERIENCE.map((text) => (
              <div key={text.id} className="mt-1">
                <li className="container-content-experience">
                  <div className="circle-for-experience" />
                  <time className="time-experience">
                    {text.id === 1 && t("time-1")}
                    {text.id === 2 && t1("time-2")}
                    {text.id === 3 && t22("time-3")}
                    {text.id === 4 && t23("time-4")}
                  </time>
                  <h3 className="title-experience">
                    {text.id === 1 && t3("title-experience-1")}
                    {text.id === 2 && t4("title-experience-2")}
                  </h3>
                  <div className="container-content-actosoft">
                    {text.id === 4 && (
                      <>
                        <LinkProject href="https://actosoft.com.mx/frontend" className="link-actosoft underline">
                          <img className="logo-actosoft" src={ActosoftImg.src} width={50}  height={50} alt="Actosoft" />
                          <h3 className="title-experience">
                            {t44("title-experience-4")}
                          </h3>
                        </LinkProject>
                        {TECHNOLOGHIES.filter(
                          (tec) =>
                            tec.text === "Typescript" ||
                            tec.text === "Material Ui"
                        ).map((tec) => (
                          <div key={tec.key}>
                            <LinkProject className="link-actosoft">
                              <img
                                src={tec.url}
                                width={20}
                                height={20}
                                alt={tec.text}
                              />
                              <h1>{tec.text}</h1>
                            </LinkProject>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  {text.id === 4 && (
                    <>
                      <div className="flex flex-row gap-3 min-w-full">
                        <img src={ReposImg.src} className="w-96 mt-5" />
                        <div className="mt-8">
                          <Clock className="text-amber-600 dark:text-yellow-500 size-8"/>
                          <Check className="text-green-500 size-8 mt-5"/>
                        </div>
                      </div>
                      <div className="mt-2 ">
                        <div className="flex items-center gap-x-3 text-2xl mt-6 font-semidbold text-yellow-500 ml-2">
                          {t9("title")}
                          <FolderCog className="mt-[6px]" />
                        </div>
                        <img src={RefImg.src} className="w-96 mt-5 mb-10" />
                      </div>
                    </>
                  )}
                  <p
                    className="mb-4 mt-4 text-lg font-extrabold lg:max-w-screen-md md:max-w-2xl max-w-screen-sm text-gray-950 dark:text-white"
                  >
                    {text.id === 1 && t5("description-experience-1")}
                    {text.id === 2 && t6("description-experience-2")}
                    {text.id === 3 && t7("description-experience-3")}
                    {text.id === 4 && t8("description-experience-4")}
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
