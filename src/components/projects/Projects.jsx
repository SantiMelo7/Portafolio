import { PROJECTS } from "@/const/projects";
import Title from "../technologies/Title";
import TitleInitial from "../layout/TitleInitial";
import TextProject from "./TextProject";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <section className="max-w-6xl mx-auto shadow-xl">
        <div className="lg:grid lg:grid-cols-2 mx-auto ">
          {PROJECTS.map((project) => (
            <>
              <img
                src={project.img}
                className="rounded-2xl relative md:right-10 md:w-[60vh] sm:w-[40vh] sm:mx-auto mt-10 mask"
              />
              <div className="flex flex-col sm:justify-center sm:items-center lg:justify-start lg:items-start mt-1 mt-1">
                <TitleInitial text={project.title} className="text-3xl" />
                <TextProject text={project.description} />
                <div className="section-projects">
                  <Toolsproject projectId={project.tools} />
                </div>
                <div className="section-buttons">
                  <ProjectBottom
                    hrefGitHub={project.visitGit}
                    hrefLink={project.visitPrev}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
