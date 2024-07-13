/* eslint-disable @next/next/no-img-element */
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
      <section className="container-projects">
        <div className="container-content-projects">
          {data.map((project) => (
            <>
              <img
                key={project.key}
                src={project.img}
                className="img-projects"
                alt={project.title}
              />
              <div className="container-text">
                <TitleInitial text={project.title} className="text-me-medium" />
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
