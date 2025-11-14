/* eslint-disable @next/next/no-img-element */

import { useTranslations } from "next-intl";

import { TitleLine } from "../../atoms";
import { CardProjects } from "../../molecules";

import "./Projects.styled.css";

const Projects = ({ url, data, desing = false, title = false }) => {
  const titleTransaltions = desing ? "Projects-Desing" : "Projects";

  const translateProjects = useTranslations(titleTransaltions);

  return (
    <section className="section-main-projects">
      <div className="container-main-projects">
        <TitleLine title={title} translationKey="projects" />

        {data?.map((project) => (
          <CardProjects
            key={project?.id}
            project={project}
            url={url}
            translateProjects={translateProjects}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
