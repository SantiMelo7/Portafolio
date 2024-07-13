import { EXPERIENCE } from "../../const/experience";
import { useExperience, useLineTitle } from "../../hooks/useTraduccion";
import Title from "../technologies/Title";
import ActosoftImg from "../../../public/content/actosoft.png";
import Image from "next/image";
import { MaterialUi, Typescript } from "../../svg/IconsSvg";
import LinkProject from "../projects/LinksProject";

export default function Experience() {
  const { t2 } = useLineTitle();
  const { t, t22, t23, t1, t3, t4, t44, t5, t6, t7, t8 } = useExperience();
  return (
    <>
      <Title title={t2("title-experience-line")} />
      <div className="container-center">
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
                    <h3 className="title-experience">
                      {t44("title-experience-4")}
                    </h3>
                  )}
                  {text.id === 4 && (
                    <>
                      <LinkProject
                        href="https://actosoft.com.mx/frontend"
                        className="link-actosoft"
                      >
                        <Image
                          className="logo-actosoft"
                          src={ActosoftImg.src}
                          width={80}
                          height={80}
                          alt="Logo Actosoft"
                        />
                      </LinkProject>
                      <LinkProject className="link-typescript">
                        <Typescript width={20} />
                      </LinkProject>
                      <LinkProject className="link-material-ui ">
                        <MaterialUi width={20} />
                      </LinkProject>
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
