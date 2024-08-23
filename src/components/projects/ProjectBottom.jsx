import { useProjectBottom } from "../../hooks/useTraduccion";
import { GitHub, LinkProject } from "../../svg/IconsSvg";
import ButtonProjects from "./ButtonProjects";

export default function ProjectBottom({ hrefGitHub, hrefLink }) {
  const { t, t2 } = useProjectBottom();
  return (
    <>
      <ButtonProjects className="content-link" href={hrefGitHub}>
        <GitHub fill="white" />
        <p>{t("code")}</p>
      </ButtonProjects>
      <div className="mt-3 relative bottom-3">
        <ButtonProjects className="content-link" href={hrefLink}>
          <LinkProject /> <p className="p-[10px]">{t2("preview")}</p>
        </ButtonProjects>
      </div>
    </>
  );
}
