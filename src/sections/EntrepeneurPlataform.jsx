import SectionProject from "@/components/projects/SectionProject";
import ProjectBottom from "@/components/projects/ProjectBottom";
import LinkProject from "@/components/projects/LinksProject";
import {
  Javascript,
  ReactJs,
  NextJs,
  Axios,
  StyledComponents,
} from "@/svg/IconsSvg";
import ButtonProjects from "@/components/projects/ButtonProjects";

export default function EntrepreneurPlataform() {
  return (
    <SectionProject
      src="/entrepeneur-platform.webp"
      title="Entrepeneur Platform"
      subTitle="Application for entrepreneurship, where you can show the world the potential of your invention and get people interested in it. Created with Next.Js, React and others"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          rowGap: "15px",
          marginTop: "12px",
          columnGap: "16px",
        }}
      >
        <ButtonProjects>
          <NextJs width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <ReactJs width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <Javascript width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <Axios width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <StyledComponents width={50} />
        </ButtonProjects>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "15px",
          marginTop: "12px",
          columnGap: "16px",
        }}
      >
        <ProjectBottom hrefGitHub="" hrefLink="" />
      </div>
    </SectionProject>
  );
}
