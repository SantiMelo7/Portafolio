/* eslint-disable @next/next/no-img-element */
import { Clock } from "lucide-react";
import { useLineTitle } from "../../hooks/useTraduccion";
import TitleInitial from "../layout/TitleInitial";
import Title from "../technologies/Title";
import ProjectBottom from "./ProjectBottom";
import { Toolsproject } from "./ToolsProject";
import FooterProjects from "./FooterProjects";
import ActosoftImg from "../../../public/content/actosoft.png"

export default function ContentProjects({ line, data, get, url, children }) {
  const { t } = useLineTitle();

  return (
    <div className="xl:mt-40 md:mt-14">
      <section className="scroll-m-20 w-full mt-10 xl:p-0 p-4 mx-auto container lg:max-w-6xl md:max-w-4xl">
        <div className="mb-10">
          {line && <Title title={t("title-projects-line")} />}
        </div>
        <div className="flex flex-col gap-y-16">
          {data.map((project) => {
            return (
              <article
                disabled={project.disabled}
                key={project.id}
                className="relative flex flex-col group space-x-0 space-y-8 lg:flex-row md:space-x-8 md:space-y-0 disabled:group disabled:cursor-not-allowed"
              >
                {project.disabled && (
                  <div className='absolute inset-0 z-10 dark:bg-black/40 group-hover:opacity-0 transition-opacity duration-300
                    w-full h-full flex items-start justify-start'
                  >
                    <Clock className="text-amber-600 dark:text-yellow-500 size-8 md:ml-10 mt-16 ml-3 md:mt-8"/>
                  </div>
                )}


                <div
                  className={`w-full md:w-[95%] lg:w-[70%] ${
                    project.disabled && "opacity-50 pointer-events-none filter grayscale group-hover:opacity-100 group-hover:pointer-events-auto group-hover:filter-none"
                  }`}
                >
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl  lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  {project.refWork &&
                    <div className='absolute flex-col inset-0 z-10 w-full h-full flex items-start justify-start'>
                      <img src={ActosoftImg.src} className="w-20 h-20 object-contain -translate-y-7" alt="Actosoft"/>
                    </div>
                  }
                    <img
                      src={project.img}
                      alt={project.title}
                      className="object-cover object-top w-full h-62 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    />
                  </div>
                </div>

                <div
                  className={`w-full lg:-translate-y-7 2xl:-translate-y-1 md:items-start md:justify-start md:block flex flex-col justify-between items-center md:max-w-xl ${
                    project.disabled
                      && "opacity-50 pointer-events-none filter grayscale group-hover:opacity-100 group-hover:pointer-events-auto group-hover:filter-none"
                  }`}
                >
                  <div>
                    <TitleInitial text={project.title} className="text-3xl" />
                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      {children(project)}
                    </div>
                    <div className="flex flex-wrap mt-2">
                      <ul className="flex flex-wrap mb-2 gap-x-2">
                        <Toolsproject tools={project.tools} />
                      </ul>
                    </div>
                  </div>
                  <FooterProjects getMarginTop={get} id={project.id}>
                    <ProjectBottom
                      hrefGitHub={project.visitGit}
                      hrefLink={project.id === 6 ? url : project.visitPrev}
                    />
                  </FooterProjects>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
