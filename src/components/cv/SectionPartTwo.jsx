import { lineTec } from "./data";
import Link from "next/link";
import ContentLayout from "./ContentLayout";
import { useCurriculum } from "../../hooks/useTraduccion";

export default function SectionPartTwo() {
  const { t, t3, t4 } = useCurriculum()

  const getText = (id) => {
    switch (id) {
      case 4:
        return t3("visit-1");
      case 5:
        return t4("visit-2");
      default:
        return "";
    }
  };

  return (
    <>
      <ContentLayout title={t("section-1")} />
      <ul className="dark:text-white text-black flex text-2xl md:text-xl flex-col md:flex-row justify-center items-center gap-5 mt-5">
        {lineTec.map((text) => (
          <div key={text.key}>
            {text.key < 4 && <li href={text.url}>{text.text}</li>}
            {text.key >= 4 && <Link style={{ textDecoration: "underline"}}  href={text.url}>{getText(text.key)}</Link>}
          </div>
        ))}
      </ul>
    </>
  );
}
