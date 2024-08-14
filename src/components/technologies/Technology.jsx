/* eslint-disable @next/next/no-img-element */
import { TECHNOLOGHIES } from "../../const/tec";
import { useLineTitle } from "../../hooks/useTraduccion";
import Title from "./Title";

export default function Technology() {
  const { t3 } = useLineTitle();
  return (
    <div className="flex flex-col md:max-w-6xl md:mt-5 dark:mt-0 mt-2 dark:mb-0 mb-5 mx-auto dark:bg-transparent rounded-lg">
      <div className="mx-auto sm:max-w-screen-xl mt-12">
        <div className="mt-1">
          <Title title={t3("title-technologies-line")} />
        </div>
        <div className="grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 grid-cols-4-90px gap-10 mt-10">
          {TECHNOLOGHIES.map((tect) => (
            <div
              className="flex flex-col justify-center items-center gap-3"
              key={tect.id}
            >
              <img src={tect.url} width={60} alt={tect.text}/>
              <h1 className="font-extrabold text-center dark:text-white text-black">{tect.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );x
}
