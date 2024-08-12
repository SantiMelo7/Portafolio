/* eslint-disable @next/next/no-img-element */
import Title from "../technologies/Title";
import TitleInitial from "../layout/TitleInitial";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";
import { useLineTitle } from "../../hooks/useTraduccion";

export default function ContentProjects({ line, data, url, children }) {
  const { t } = useLineTitle();
  return (
    <div className="mt-20">
      <section className="max-w-6xl mx-auto dark:shadow-xl min-h-full p-3">
        {line && <Title title={t("title-projects-line")} />}
        {data.map((project) => (
        <div key={project.id}  className="grid lg:grid-cols-2 mx-auto gap-10">
          <img src={project.img} className="img-projects" alt={project.title} />
          <div className="container-text">
            <TitleInitial text={project.title} className="text-3xl" />
            {children(project)}
            <div className="grid sm:grid-cols-3 grid-cols-2 lg:ml-0 mx-auto gap-x-10">
              <Toolsproject tools={project.tools} />
            </div>
            <div className="mx-auto grid grid-cols-2 gap-y-4 gap-x-3 mt-3">
              <ProjectBottom
                hrefGitHub={project.visitGit}
                hrefLink={project.title === "Design Projects" ? url : project.visitPrev}
              />
            </div>
          </div>
        </div>
        ))}
      </section>
    </div>
  );
}
