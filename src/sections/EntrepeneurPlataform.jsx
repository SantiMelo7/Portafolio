import SectionProject from "@/components/Projects/SectionProject";
import ProjectBottom from "@/components/Projects/ProjectBottom";
import LinkProject from "@/components/Projects/LinksProject";
import {
  Javascript,
  ReactJs,
  NextJs,
  Axios,
  StyledComponents,
} from "@/svg/IconsSvg";

export default function EntrepreneurPlataform() {
  return (
    <SectionProject
      className="h-[50%]"
      src="/entrepeneur-platform.webp"
      title="Entrepeneur Platform"
      subTitle=""
    >
      <div className="grid grid-cols-2 gap-y-3 mt-3 gap-x-4">
        <LinkProject>
          <NextJs />
        </LinkProject>
        <LinkProject>
          <ReactJs />
        </LinkProject>
        <LinkProject>
          <Javascript />
        </LinkProject>
        <LinkProject>
          <StyledComponents />
        </LinkProject>
        <LinkProject>
          <Axios />
        </LinkProject>
        <ProjectBottom hrefGitHub="" hrefLink="" />
      </div>
    </SectionProject>
  );
}
