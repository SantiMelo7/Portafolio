import { PROJECTS } from "../../const/projects";
import Title from "../technologies/Title";
import TitleInitial from "../layout/TitleInitial";
import TextProject from "./TextProject";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";
import { useLineTitle, useProjects } from "../../hooks/useTraduccion";

export default function Projects() {
  const { t } = useLineTitle();
  const { t1, t2, t3, t4, t5, t6, t7 } = useProjects();
  return (
    <>
      <Title title={t("title-projects-line")} />
      <section className="max-w-6xl mx-auto dark:shadow-xl">
        <div className="lg:grid md:grid-cols-2 mx-auto ">
          {PROJECTS.map((project) => (
            <>
              <img src={project.img} className="img-projects" />
              <div className="flex flex-col sm:justify-center sm:items-center lg:justify-start lg:items-start mt-1 p-2">
                <TitleInitial text={project.title} className="text-3xl" />
                <TextProject
                  text={
                    (project.id === 1 && t1("description-1")) ||
                    (project.id === 2 && t2("description-2")) ||
                    (project.id === 3 && t3("description-3")) ||
                    (project.id === 4 && t4("description-4")) ||
                    (project.id === 5 && t5("description-5")) ||
                    (project.id === 6 && t6("description-6")) ||
                    (project.id === 7 && t7("description-7"))
                  }
                />
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
