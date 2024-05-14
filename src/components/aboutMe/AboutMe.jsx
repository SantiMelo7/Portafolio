import { UserMe } from "../../svg/IconsSvg";
import { useAboutMeTraductor } from "../../hooks/useTraduccion";

export default function AboutMe() {
  const { t, t2, t3, t4 } = useAboutMeTraductor();
  return (
    <>
      <section className="max-w-screen-xl mx-auto md:mt-20 sm:mt-10">
        <div className="mt-10 flex flex-row lg:justify-start sm:justify-center lg:pl-40 md:gap-x-5">
          <UserMe />
          <h1 className="my-auto text-3xl text-red-900 dark:text-yellow-500 font-extrabold">
            {t4("title")}
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:pl-40">
          <div className="mt-5">
            <p className="content-about">{t("part-1")}</p>
            <p className="content-about">{t2("part-2")}</p>
            <p className="content-about">{t3("part-3")}</p>
          </div>
          <div
            className="flex lg:justify-end sm:justify-center mx-auto mb-10 sm:mt-10 relative lg:bottom-10
            my-auto lg:skew-y-3 sm:skew-x-3 hover:lg:skew-x-3 hover:sm:skew-y-3 hover:scale-90"
          >
            <div className="border-img-about-me border-[4px]">
              <div className="border-img-about-me border-[3px]">
                <div className="border-img-about-me border-[2px]">
                  <div className="border-img-about-me border-[1px]">
                    <img
                      src="/content/me.webp"
                      className=" md:w-[300px] sm:w-[250px] rounded-[20px] p-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
