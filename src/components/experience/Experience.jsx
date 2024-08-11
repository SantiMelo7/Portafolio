/* eslint-disable @next/next/no-img-element */
import { EXPERIENCE } from "../../const/experience";
import { useExperience, useLineTitle } from "../../hooks/useTraduccion";
import Title from "../technologies/Title";
import ActosoftImg from "../../../public/content/actosoft.png";
import LinkProject from "../projects/LinksProject";
import { TECHNOLOGHIES } from "../../const/tec";

export default function Experience() {
  const { t2 } = useLineTitle();
  const { t, t22, t23, t1, t3, t4, t44, t5, t6, t7, t8 } = useExperience();
  return (
    <>
      <Title title={t2("title-experience-line")} />
      <div className="container-center md:max-w-full md:p-0 max-w-screen-md p-6">
        <ol className="container-line">
          {EXPERIENCE.map((text) => (
            <div key={text.id}>
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
                <p className="description-experience">
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
    </>
  );
}
