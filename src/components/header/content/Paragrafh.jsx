import { useParragrafhTraductor } from "../../../hooks/useTraduccion";

export default function Parragrafh() {
  const { t, t2, t3, t4, t5 } = useParragrafhTraductor();

  const cssSpan = "dark:text-yellow-200 text-yellow-800";

  const cssP =
    "xl:text-2xl md:text-xl text-xl dark:text-white text-gray-800 font-extrabold p-1";

  return (
    <div className="mt-7 md:p-0 p-2">
      <strong className={cssP}>
        {t("cam")}, <span className={cssSpan}> {t2("year")} </span>
        <span className={cssSpan}>
          {t3("pages")}
        </span>
      </strong>
      <strong className={cssP}>{t5("challenges")}</strong>
    </div>
  );
}
