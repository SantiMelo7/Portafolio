import { TECHNOLOGHIES } from "@/const/tec";
import Title from "./Title";

export default function Technology() {
  return (
    <>
      <Title title="Technologies" />
      <div className="flex flex-col max-w-5xl mb-5 mx-auto">
        <div
          className="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 sm:max-w-screen-md xl:max-w-screen-xl
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
