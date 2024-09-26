/* eslint-disable @next/next/no-img-element */
import { useLineTitle } from "../../hooks/useTraduccion";
import TitleInitial from "../layout/TitleInitial";
import Title from "../technologies/Title";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";

export default function ContentProjects({ line, data, url, children }) {
  const { t } = useLineTitle();
  return (
    <div className={url && "lg:mt-[280px] md:mt-[310px] sm:mt-3 mt-20"}>
      <div className="mt-10 w-[90%] 2xl:w-[80%] mx-auto">
        {line && <Title title={t("title-projects-line")} />}
      </div>
      <section className="max-w-6xl mx-auto dark:shadow-xl min-h-full p-3">
        {data.map((project) => (
          <div key={project.id} className="grid 2xl:grid-cols-2 mx-auto gap-10 mb-10">
            <img
              src={project.img}
              className=" rounded-2xl 2xl:mb-10 2xl:w-full md:w-[70%] w-[90vw] 2xl:h-[300px] 2xl:object-cover mx-auto mt-5"
              alt={project.title}
            />
            <div className="flex flex-col 2xl:-translate-y-0 -translate-y-10 2xl:justify-start 2xl:items-start p-2">
              <TitleInitial
                text={project.title}
                className="text-3xl text-center"
              />
              {children(project)}
              <div className="container-tools-projects">
                <Toolsproject tools={project.tools} />
              </div>
              <div className="mx-auto 2xl:translate-x-28 grid grid-cols-2 gap-y-4 gap-x-3 mt-3">
                <ProjectBottom
                  hrefGitHub={project.visitGit}
                  hrefLink={
                    project.id === 6
                      ? url
                      : project.visitPrev
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
