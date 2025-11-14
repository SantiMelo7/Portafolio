/* eslint-disable @next/next/no-img-element */

import UserImg from "../../../../public/svg/user.png";

import Image from "next/image";
import { useTranslations } from "next-intl";

import "./AboutMe.styled.css";
import { ImagePortfolio } from "../../atoms";

const AboutMe = () => {
  const t = useTranslations("AboutMe");

  const dataTranslate = [
    { key: 1, text: t("description1") },
    { key: 2, text: t("description2") },
    { key: 3, text: t("description3") },
  ];

  return (
    <>
      <section className="section-main-about-me">
        <div className="container-first-content-about-me">
          <Image src={UserImg.src} width={80} height={80} alt="User" />
          <h1 className="title-first-content-about-me">{t("title")}</h1>
        </div>

        <div className="container-description-about-me">
          <div>
            {dataTranslate?.map((data) => (
              <p key={data?.key} className="description-about-me">
                {data?.text}
              </p>
            ))}
          </div>

          <div className="container-main-border-img-about-me">
            <div className="border-layer-1">
              <div className="border-layer-2">
                <div className="border-layer-3">
                  <div className="border-layer-4">
                    <ImagePortfolio variant="Me" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-main-capsule">
        <ImagePortfolio variant="Capsule" />
      </div>
    </>
  );
};

export default AboutMe;
