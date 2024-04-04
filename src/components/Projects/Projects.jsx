import { PROJECTS } from "@/const/projects";
import Title from "../technologies/Title";
import TitleInitial from "../layout/TitleInitial";
import TextProject from "./TextProject";
import LinkProject from "./LinksProject";
import ProjectBottom from "./ProjectBottom";

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <section className="max-w-6xl mx-auto shadow-xl">
        <div className="md:grid md:grid-cols-2 justify-center items-center mx-auto hover:transition-all ">
          {PROJECTS.map((project) => (
            <>
              <img
                src={project.img}
                className="rounded-2xl relative md:right-10 md:w-[60vh] sm:w-[45vh] mt-10 mask"
              />
              <div className="flex flex-col sm:justify-center sm:items-center md:justify-start md:items-start mt-5">
                <TitleInitial text={project.title} className="text-3xl" />
                <TextProject text={project.description} />
                <div className="section-projects">
                  <LinkProject>{project.tools.next}</LinkProject>
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
