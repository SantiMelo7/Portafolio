import { ImagePortfolio } from "../../atoms";

import { dataTechnologies } from "../../../util/helpers/dataTechnologies";

import "./Tools.styled.css";

const Tools = ({ project, technology = false }) => {
  const colors = ["#ff605c", "#ffbd44", "#00ca4e"];

  const classNameDefault = technology ? "technology" : "projects";

  const dataTools = Array.isArray(project?.tools)
    ? project?.tools
        .map((key) => dataTechnologies?.find((item) => item?.text === key))
        .filter(Boolean)
    : [];

  const dataTechnology = dataTechnologies?.map((item) => item);

  const dataDefault = technology ? dataTechnology : dataTools;

  return (
    <div className={`container-main-tools-${classNameDefault}`}>
      <div
        className={`${
          technology
            ? "container-tools-technology"
            : "container-content-tools-projects"
        }`}
      >
        {dataDefault?.map((tech) => {
          return (
            <div
              key={tech?.id}
              className={`${
                technology && "container-content-tools-technology"
              }`}
            >
              {technology && (
                <div className="container-circle-card">
                  {colors?.map((color, index) => (
                    <span
                      key={index}
                      className="circle-card"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}

              <div className={`container-render-tools-${classNameDefault}`}>
                <ImagePortfolio
                  variant={
                    technology ? "CardTechnologyImg" : "ProjectsToolsImg"
                  }
                  src={tech?.url}
                  alt={tech?.text}
                />

                <h1 className={`title-render-tools-${classNameDefault}`}>
                  {tech?.text}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
