/* eslint-disable @next/next/no-img-element */

import ActosoftImg from "../../../../public/content/actosoft.png";
import LogoImg from "../../../../public/favicon/android-chrome-192x192.png";
import ReposImg from "../../../../public/content/repos.webp";
import RefImg from "../../../../public/content/ref.webp";
import OrganizationsImg from "../../../../public/content/organizations.webp";
import MeImg from "../../../../public/content/me.webp";

import "./ImagePortfolio.styled.css";

const ImagePortfolio = ({
  variant,
  classVariant,
  src: propSrc,
  alt: propAlt,
  className: propClass,
}) => {
  const variants = {
    Actosoft: {
      src: ActosoftImg.src,
      alt: "Actosoft",
      className: classVariant ? "img-actosoft-experience" : "img-actosoft",
    },
    Logo: {
      src: LogoImg.src,
      alt: "Logo",
      className: "img-logo",
    },
    Repositories: {
      src: ReposImg.src,
      alt: "Repositorios",
      className: "img-repositories",
    },
    Referencies: {
      src: RefImg.src,
      alt: "Referencias",
      className: "img-references",
    },
    Organizations: {
      src: OrganizationsImg.src,
      alt: "Organizaciones",
      className: "img-organizations",
    },
    Me: {
      src: MeImg.src,
      alt: "Santi",
      className: classVariant ? "img-info-me" : "img-me",
    },
    Capsule: {
      src: "https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&section=footer&reversal=true",
      alt: "Capsula de color",
      className: "img-capsule",
    },
    ProjectsImg: {
      className: "img-projects",
    },
    ProjectsToolsImg: {
      className: "img-projects-tools",
    },
    CardProjectsImg: {
      className: "img-card-content-projects",
    },
    CardTechnologyImg: {
      className: "img-data-card",
    },
    Gallery: {
      className: "img-gallery",
    },
  };

  const { src, alt, className } = variants[variant] || {};

  const finalSrc = src || propSrc || "";
  const finalAlt = alt || propAlt || "";
  const finalClass = className || propClass || "";

  return finalSrc ? (
    <img src={finalSrc} alt={finalAlt} className={finalClass} />
  ) : (
    <div className={finalClass}></div>
  );
};

export default ImagePortfolio;
