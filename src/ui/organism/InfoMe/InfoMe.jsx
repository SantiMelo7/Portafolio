/* eslint-disable @next/next/no-img-element */

"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { ImagePortfolio } from "../../atoms";

import { dataIconsLink } from "../../../util/helpers/dataIconsLink";

import "./InfoMe.styled.css";

const InfoMe = () => {
  const translateAboutMe = useTranslations("InfoMe");

  const translateGeneric = useTranslations("Generic");

  const route = useRouter();

  return (
    <section className="section-main-info-me">
      <div className="container-main-info-me">
        <div>
          <div className="container-me">
            <ImagePortfolio variant="Me" classVariant />

            <div className="container-border-author">
              <h2 className="title-border-author">
                {translateGeneric("work")}
              </h2>
            </div>
          </div>
        </div>

        <div>
          <h1 className="title-name-me">{translateGeneric("name-author")}</h1>

          <div className="container-main-description-me">
            <strong className="text-normal-me">
              {translateAboutMe("Description.text-1")},{" "}
              {["text-2", "text-3"].map((key) => (
                <span key={key} className="text-resalt-me">
                  {translateAboutMe(`Description.${key}`)}{" "}
                </span>
              ))}
            </strong>

            <strong className="text-normal-me">
              {translateAboutMe("Description.text-5")}
            </strong>
          </div>

          <nav className="navigation-links-me">
            <div className="container-main-links-me">
              {dataIconsLink?.map((icon) => {
                return (
                  <button
                    key={icon.key}
                    onClick={() =>
                      icon?.key === 4
                        ? window.open(icon.url, "_blank")
                        : route.push(icon?.url)
                    }
                    className="link-me"
                  >
                    {icon.component}
                    {icon.text}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default InfoMe;
