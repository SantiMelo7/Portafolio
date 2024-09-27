/* eslint-disable @next/next/no-img-element */
import { TECHNOLOGHIES } from "../../const/tec";
import { useExperience } from "../../hooks/useTraduccion";
import LinkProject from "../projects/LinksProject";
import ActosoftImg from "../../../public/content/actosoft.png";

export default function ToolsInExperience() {
  const { t44 } = useExperience();

  return (
    <>
      <LinkProject
        href="https://actosoft.com.mx/frontend"
        className="link-actosoft underline"
      >
        <img
          className="logo-actosoft"
          src={ActosoftImg.src}
          width={50}
          height={50}
          alt="Actosoft"
        />
        <h3 className="title-experience">{t44("title-experience-4")}</h3>
      </LinkProject>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 sm:gap-x-3 -translate-y-3">
        {TECHNOLOGHIES.filter(
          (tec) =>
            tec.text === "Typescript" ||
            tec.text === "Material Ui" ||
            tec.text === "Mongo DB" ||
            tec.text === "Jira" ||
            tec.text === "Figma" ||
            tec.text === "Vercel" ||
            tec.text === "Netifly" ||
            tec.text === "Prisma" ||
            tec.text === "Next Auth" ||
            tec.text === "TanStack Query"
        ).map((tec) => (
          <LinkProject key={tec.key} className="link-actosoft">
            <img src={tec.url} width={20} height={20} alt={tec.text} />
            <h1 className="text-[16px] sm:text-[20px]">{tec.text}</h1>
          </LinkProject>
        ))}
      </div>
    </>
  );
}
