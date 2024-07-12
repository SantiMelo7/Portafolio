import Title from "../technologies/Title";
import TitleInitial from "../layout/TitleInitial";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";
import { useLineTitle } from "../../hooks/useTraduccion";

export default function ContentProjects({ line, data, url, children }) {
  const { t } = useLineTitle();
  return (
    <>
      {line && <Title title={t("title-projects-line")} />}
      <section className="max-w-6xl mx-auto dark:shadow-xl">
        <div className="lg:grid md:grid-cols-2 mx-auto ">
          {data.map((project) => (
            <>
              <img src={project.img} className="img-projects" />
              <div className="flex flex-col sm:justify-center sm:items-center lg:justify-start lg:items-start mt-1 p-2">
                <TitleInitial text={project.title} className="text-3xl" />
                {children(project)}
                <div className="section-projects">
                  <Toolsproject projectId={project.tools} />
                </div>
                <div className="section-buttons">
                  <ProjectBottom
                    hrefGitHub={project.visitGit}
                    hrefLink={project.id === 6 ? url : project.visitPrev}
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
