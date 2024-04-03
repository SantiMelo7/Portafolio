import LinkProject from "@/components/projects/LinksProject";
import ProjectBottom from "@/components/projects/ProjectBottom";
import SectionProject from "@/components/projects/SectionProject";
import { Javascript, Vite, ReactJs, Talwind } from "@/svg/IconsSvg";

export default function Tesla() {
  return (
    <SectionProject
      src="/tesla.webp"
      title="Tesla Clon | Home"
      subTitle="Tesla Clone Application, Created from scratch with Next.js and Tailwind CSS in order to demonstrate my skills"
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
        <LinkProject>
          <ReactJs width={20} />
        </LinkProject>
        <LinkProject>
          <Javascript width={20} />
        </LinkProject>
        <LinkProject>
          <Talwind width={20} />
        </LinkProject>
        <LinkProject>
          <Vite width={20} />
        </LinkProject>
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
        <ProjectBottom
          hrefGitHub="https://github.com/SantiMelo7/Tesla-Clon-Home"
          hrefLink="https://tesla-clon-home.netlify.app/"
        />
      </div>
    </SectionProject>
  );
}
