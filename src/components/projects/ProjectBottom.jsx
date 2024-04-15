import { useProjectBottom } from "../../hooks/useTraduccion";
import { GitHub, LinkProject } from "../../svg/IconsSvg";
import ButtonProjects from "./ButtonProjects";

export default function ProjectBottom({ hrefGitHub, hrefLink }) {
  const { t, t2 } = useProjectBottom();
  return (
    <>
      <ButtonProjects
        className="bg-gray-800 text-white border-gray-60 hover:bg-slate-400"
        href={hrefGitHub}
      >
        <GitHub />
        <p>{t("code")}</p>
      </ButtonProjects>
      <div className="mt-3 relative bottom-3">
        <ButtonProjects
          className="bg-gray-800 text-white border-gray-60 hover:bg-slate-400"
          href={hrefLink}
        >
          <LinkProject /> <p className="p-[10px]">{t2("preview")}</p>
        </ButtonProjects>
      </div>
    </>
  );
}
