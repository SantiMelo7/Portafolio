import { GitHub, LinkProject } from "@/svg/IconsSvg";
import ButtonProjects from "./ButtonProjects";

export default function ProjectBottom({ hrefGitHub, hrefLink }) {
  return (
    <>
      <ButtonProjects href={hrefGitHub}>
        <GitHub />
        <p>Code</p>
      </ButtonProjects>
      <div className="mt-3 relative bottom-3">
        <ButtonProjects href={hrefLink}>
          <LinkProject /> <p className="p-[10px]">Preview</p>
        </ButtonProjects>
      </div>
    </>
  );
}
