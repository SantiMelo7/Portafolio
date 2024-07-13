import { useTranslations } from "next-intl";
import Me from "../../../../public/content/me.webp";
import Image from "next/image";

export default function ImageHeader() {
  const t = useTranslations("ImageHeader");
  return (
    <div className="container-information-me ">
      <Image
        src={Me}
        className="rounded-xl"
        alt="Santi"
        style={{ width: 100, height: "auto" }}
      />
      <div className="container-aviable-to-work">
        <h2 className="aviable-to-work">{t("work")}</h2>
      </div>
    </div>
  );
}

// {t("work")}
