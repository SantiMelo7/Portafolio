import React from "react";
import ContentLayout from "./ContentLayout";
import { useCurriculum } from "../../hooks/useTraduccion";

export default function SectionPartFour() {
  const { t2, t5, t6 } = useCurriculum()
  return (
    <>
      <ContentLayout title={t2("section-3")} />
      <div className="mx-auto">
        <div className="flex md:justify-start md:items-start justify-center mt-2 gap-6">
          <h3 className="text-2xl font-medium text-blue-800 dark:text-blue-500 mt-2">
            {t5("tab-1")}
          </h3>
          <div className="border-[1px] border-blue-500 h-4 mt-4" />
          <h3 className="text-2xl font-medium text-blue-800 dark:text-blue-500 mt-2">{t6("tab-2")}</h3>
        </div>
        <div className="xl:max-w-screen-lg max-w-screen-md mt-5 flex justify-center items-center mb-10">
          <p className="text-center font-medium text-xl dark:text-white text-black">
            I am studying Systems Engineering and I am in my 3nd semester at
            school (Consorcio Clavijero Institute)
          </p>
        </div>
      </div>
    </>
  );
}
