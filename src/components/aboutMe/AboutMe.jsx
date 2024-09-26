/* eslint-disable @next/next/no-img-element */
import { useAboutMeTraductor } from "../../hooks/useTraduccion";
import UserImg from "../../../public/svg/user.png";
import Image from "next/image";

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
  ];

  return (
    <section className="flex justify-start items-start flex-col max-w-screen-xl mx-auto lg:mt-10 mb-5">
      <div className="mt-10 translate-y-4 flex flex-row lg:justify-start justify-center lg:ml-24 mx-auto gap-x-5">
        <Image src={UserImg.src} width={80} height={80} alt="User" />
        <h1 className="my-auto text-3xl text-red-900 dark:text-yellow-500 font-extrabold">
          {t4("title")}
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:pl-40">
        <div className="mt-5">
          {dataTranslate.map((data) => (
            <div key={data.key}>
              <p className="content-about">{data.text}</p>
            </div>
          ))}
        </div>
        <div className="flex lg:justify-end justify-center mx-auto my-auto lg:skew-y-3 skew-x-3 -translate-x-2 hover:lg:skew-x-3 hover:skew-y-3 hover:scale-90 mt-6 lg:mt-0">
          <div className="border-img-about-me border-1">
            <div className="border-img-about-me border-2">
              <div className="border-img-about-me border-3">
                <div className="border-img-about-me border-4">
                  <img
                    src="/content/me.webp"
                    className="md:w-[300px] w-[250px] rounded-[20px] p-4"
                    alt="Santiago Melo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
