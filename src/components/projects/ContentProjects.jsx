/* eslint-disable @next/next/no-img-element */
import TitleInitial from "../layout/TitleInitial";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";

export default function ContentProjects({ data, url, children }) {
  //const { t } = useLineTitle();
  return (
    <>
      <section className="container-projects mt-16">
        <div className="container-content-projects">
          {data.map((project) => (
            <div key={project.id} className="container-text">
              <img
                key={project.key}
                src={project.img}
                className="img-projects"
                alt={project.title}
              />
              <TitleInitial text={project.title} className="text-me-medium" />
              {children(project)}
              <div className="section-projects">
                <Toolsproject tools={project.tools} />
              </div>
              <div className="section-buttons max-h-full">
                <ProjectBottom
                  hrefGitHub={project.visitGit}
                  hrefLink={project.title === "Design Projects" ? url : project.visitPrev}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
