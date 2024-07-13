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
      <div className="container-preview">
        <ButtonProjects className="content-link" href={hrefLink}>
          <LinkProject /> <p className="preview">{t2("preview")}</p>
        </ButtonProjects>
      </div>
    </>
  );
}
