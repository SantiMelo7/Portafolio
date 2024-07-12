import { TECHNOLOGHIES } from "../../const/tec";
import { useLineTitle } from "../../hooks/useTraduccion";
import Title from "./Title";

export default function Technology() {
  const { t3 } = useLineTitle();
  return (
    <>
      <Title title={t3("title-technologies-line")} />
      <div
        className="flex flex-col md:max-w-6xl sm:max-w-sm sm:mt-5 dark:mt-0 mt-2 dark:mb-0
        mb-5 mx-auto dark:bg-transparent dark:p-0 p-10 rounded-lg "
      >
        <div
          className="grid xl:grid-cols-8 md:grid-cols-5 sm:grid-cols-3 sm:max-w-screen-sm sm:mx-auto xl:max-w-screen-xl
          md:max-w-screen-md gap-10 dark:mt-10"
        >
          {TECHNOLOGHIES.map((tect) => (
            <div
              className="flex flex-col justify-center items-center gap-3"
              key={tect.id}
            >
              {tect.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
