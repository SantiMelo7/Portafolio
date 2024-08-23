import { useTranslations } from "next-intl";
import Me from "../../../../public/content/me.webp";
import Image from "next/image";

export default function ImageHeader() {
  const t = useTranslations("ImageHeader");
  return (
    <div className="flex lg:flex-row flex-col lg:justify-start lg:mt-28 items-center gap-4 mt-4">
      <Image
        src={Me}
        className="rounded-xl"
        alt="Santi"
        style={{ width: 100, height: "auto" }}
      />
      <div className="border-[3px] border-green-900 dark:border-[#C0EE9C] py-1 px-4">
        <h2 className="text-xl font-extrabold text-green-800 dark:text-white">{t("work")}</h2>
      </div>
    </div>
  );
}
