import { GitHub, LinkProject } from "@/svg/IconsSvg";
import ButtonProjects from "./ButtonProjects";

export default function ProjectBottom({ hrefGitHub, hrefLink }) {
  return (
    <>
      <ButtonProjects href={hrefGitHub}>
        <GitHub />
      </ButtonProjects>
      <ButtonProjects href={hrefLink}>
        <LinkProject />
      </ButtonProjects>
    </>
  );
}
