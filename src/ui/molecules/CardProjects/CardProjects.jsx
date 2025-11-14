/* eslint-disable @next/next/no-img-element */

import { Clock } from "lucide-react";
import { GitHub } from "@mui/icons-material";
import { Link1Icon } from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";

import { ImagePortfolio, LinkAtom } from "../../atoms";
import { Tools } from "..";

import "./CardProjects.styled.css";

const CardProjects = ({ project, url, translateProjects }) => {
  const translateGeneric = useTranslations("Generic");

  const buttons = [
    {
      icon: <GitHub />,
      text: translateGeneric("button-code"),
      href: project?.visitGit,
      disabled: project?.notCode,
    },
    {
      icon: <Link1Icon />,
      text: translateGeneric("button-prev"),
      href: project?.id === 6 ? url : project?.visitPrev,
    },
  ];

  return (
    <article
      disabled={project?.disabled}
      className="group disabled:group container-main-card-projects"
    >
      {project?.disabled && (
        <div className="group-hover:opacity-0 container-card-disabled">
          <Clock className="icon-clock-disabled" />
        </div>
      )}

      <div
        className={`container-card-content-projects ${
          project?.disabled && "container-card-content-projects-disabled"
        }`}
      >
        <div className="container-card-content-img">
          {project?.refWork && (
            <div className="container-card-content-img-actosoft">
              <ImagePortfolio variant="Actosoft" />
            </div>
          )}

          <ImagePortfolio
            src={project?.img}
            alt={project?.title}
            variant="CardProjectsImg"
          />
        </div>
      </div>

      <div
        className={`container-text-projects ${
          project?.disabled && "container-card-content-projects-disabled"
        }`}
      >
        <h1 className="title-projects">{project?.title}</h1>
        <p className="description-projects">
          {translateProjects(`Description.text-${project?.id}`)}
        </p>

        <Tools project={project} />

        <footer className="footer-projects">
          {buttons.map((btn, index) => (
            <LinkAtom
              variant="LinkProjects"
              key={index}
              disabled={btn?.disabled}
              href={btn?.disabled ? undefined : btn.href}
            >
              {btn.icon}
              <p>{btn.text}</p>
            </LinkAtom>
          ))}
        </footer>
      </div>
    </article>
  );
};

export default CardProjects;
