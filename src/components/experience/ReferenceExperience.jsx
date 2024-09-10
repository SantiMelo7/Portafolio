/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Check, Clock, FolderCog } from "lucide-react";
import ReposImg from "../../../public/content/repos.webp";
import RefImg from "../../../public/content/ref.webp";
import { useExperience } from "../../hooks/useTraduccion";

export default function ReferenceExperience() {
  const { t9 } = useExperience();

  return (
    <>
      <div className="flex flex-row gap-3 min-w-full">
        <img src={ReposImg.src} className="w-72 sm:w-96 mt-7 sm:mt-5 " />
        <div className="mt-10 sm:mt-8">
          <Clock className="text-amber-600 dark:text-yellow-500 -translate-y-4 sm:-translate-y-3 size-8" />
          <Clock className="text-amber-600 dark:text-yellow-500 -translate-y-2 sm:translate-y-3  size-8" />
          <Check className="text-green-500 size-8 sm:translate-y-3 sm:mt-5" />
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center gap-x-3 text-2xl mt-6 dark:font-semidbold font-extrabold text-yellow-900 dark:text-yellow-500 ml-2">
          {t9("title")}
          <FolderCog className="mt-[6px]" />
        </div>
        <img src={RefImg.src} className="w-72 sm:w-96 mt-5 mb-10" />
      </div>
    </>
  );
}
