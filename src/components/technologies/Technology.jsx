import { TECHNOLOGHIES } from "../../const/tec";
import { useLineTitle } from "../../hooks/useTraduccion";
import Title from "./Title";

export default function Technology() {
  const { t3 } = useLineTitle();
  return (
    <>
      <Title title={t3("title-technologies-line")} />
      <div className="flex flex-col max-w-5xl mb-5 mx-auto">
        <div
          className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 sm:max-w-screen-sm sm:mx-auto xl:max-w-screen-xl
          md:max-w-screen-md gap-10 mt-10"
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
