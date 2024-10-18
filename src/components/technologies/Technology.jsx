/* eslint-disable @next/next/no-img-element */
import { TECHNOLOGHIES } from "../../const/tec";
import { useLineTitle } from "../../hooks/useTraduccion";
import Title from "./Title";
import CircleTec from "./CircleTec";

export default function Technology() {
  const { t3 } = useLineTitle();
  return (
    <>
      <div className="scroll-m-20 w-full mt-20 xl:p-0 p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <div className="mb-10">
          <Title title={t3("title-technologies-line")} />
        </div>
        <div className="tec-grid">
          {TECHNOLOGHIES.map((tect) => (
            <div
              className="w-[190px] h-[204px] md:mr-0 mr-5 mx-auto dark:bg-[#283149] bg-gray-300 dark:shadow-none shadow-lg shadow-gray-600 rounded-[8px] z-[1] transition-all hover:!scale-105 card"
              key={tect.id}
            >
              <div className="flex items-center gap-x-2 p-2">
                <CircleTec color="bg-[#ff605c]" />
                <CircleTec color="bg-[#ffbd44]" />
                <CircleTec color="bg-[#00ca4e]" />
              </div>
              <div className="flex justify-center items-center flex-col h-[75%] gap-[10px]">
                <img
                  src={tect.url}
                  className="w-[75px] h-[75px]"
                  alt={tect.text}
                />
                <h1 className="font-extrabold text-xl mt-2 text-center dark:text-white text-black">
                  {tect.text}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
