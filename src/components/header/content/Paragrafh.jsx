import { useTranslations } from "next-intl";

export default function Paragrafh() {
  const t = useTranslations("Developer");
  const t2 = useTranslations("Year");
  const t3 = useTranslations("World");
  const t4 = useTranslations("Tec");
  const t5 = useTranslations("DaysNew");
  const cssSpan = "text-yellow-200";

  const cssP = "xl:text-2xl md:text-xl sm:text-xl text-white";

  return (
    <>
      <strong className={cssP}>
        {" "}
        {t("cam")}, &nbsp; <span className={cssSpan}>{t2("year")}</span>{" "}
        {t3("pages")} &nbsp;{" "}
        <span className={cssSpan}>
          {" "}
          {`React, Next JS, Tailwind, ${t4("most")} HTML, CSS and Javascript`}
        </span>
      </strong>

      <strong className={cssP}>{t5("challenges")}</strong>
    </>
  );
}
