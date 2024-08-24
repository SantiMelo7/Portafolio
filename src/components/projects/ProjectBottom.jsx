import { Link } from "lucide-react";
import { useProjectBottom } from "../../hooks/useTraduccion";
import ButtonProjects from "./ButtonProjects";
import { GitHub } from "../../svg/IconsSvg"

export default function ProjectBottom({ hrefGitHub, hrefLink }) {
  const { t, t2 } = useProjectBottom();

  return (
    <>
      <ButtonProjects className="content-link" href={hrefGitHub}>
        <GitHub />
        <p>{t("code")}</p>
      </ButtonProjects>
      <div className="mt-3 relative bottom-3">
        <ButtonProjects className="content-link" href={hrefLink}>
          <Link /> <p className="p-[10px]">{t2("preview")}</p>
        </ButtonProjects>
      </div>
    </>
  );
}
