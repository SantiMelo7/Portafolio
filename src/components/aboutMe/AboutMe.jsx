/* eslint-disable @next/next/no-img-element */
import { UserMe } from "../../svg/IconsSvg";
import { useAboutMeTraductor } from "../../hooks/useTraduccion";

export default function AboutMe() {
  const { t, t2, t3, t4 } = useAboutMeTraductor();

  const dataTranslate = [
    {
      key: 1,
      text: t("part-1"),
    },
    {
      key: 2,
      text: t2("part-2"),
    },
    {
      key: 3,
      text: t3("part-3"),
    },
  ]

  return (
    <section className="about-me">
      <div className="container-title-about">
        <UserMe />
        <h1 className="title-in-section">{t4("title")}</h1>
      </div>
      <div className="container-about-content">
        <div className="container-parragrafh">
          {dataTranslate.map((data) => (
            <div key={data.key}>
              <p className="content-about">{data.text}</p>
            </div>
          ))}
        </div>
        <div className="container-about-photo">
          <div className="border-img-about-me border-1">
            <div className="border-img-about-me border-2">
              <div className="border-img-about-me border-3">
                <div className="border-img-about-me border-4">
                  <img src="/content/me.webp" className="about-me" alt="Santiago Melo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
