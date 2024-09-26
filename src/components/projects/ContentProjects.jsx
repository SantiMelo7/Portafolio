/* eslint-disable @next/next/no-img-element */
import Title from "../technologies/Title";
import TitleInitial from "../layout/TitleInitial";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";
import { useLineTitle } from "../../hooks/useTraduccion";

export default function ContentProjects({ line, data, url, children }) {
  const { t } = useLineTitle();
  return (
    <div className="mt-28">
      <div className="mt-10 w-[90%] lg:w-[75%] mx-auto">
        {line && <Title title={t("title-projects-line")} />}
      </div>
      <section className="max-w-6xl mx-auto dark:shadow-xl min-h-full p-3">
        {data.map((project) => (
          <div key={project.id} className="grid xl:grid-cols-2 mx-auto gap-10">
            <img
              src={project.img}
              className=" rounded-2xl xl:mb-10 xl:w-full md:w-[70%] w-[90vw] xl:h-[300px] xl:object-cover mx-auto mt-5"
              alt={project.title}
            />
            <div className="flex flex-col xl:-translate-y-0 -translate-y-10 xl:justify-start xl:items-start p-2">
              <TitleInitial
                text={project.title}
                className="text-3xl text-center"
              />
              {children(project)}
              <div className="grid sm:grid-cols-3 grid-cols-2 xl:ml-0 mx-auto gap-x-10">
                <Toolsproject tools={project.tools} />
              </div>
              <div className="mx-auto grid grid-cols-2 gap-y-4 gap-x-3 mt-3">
                <ProjectBottom
                  hrefGitHub={project.visitGit}
                  hrefLink={
                    project.title === "Design Projects"
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
