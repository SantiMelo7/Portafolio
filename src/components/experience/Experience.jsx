import { EXPERIENCE } from "@/const/experience";
import Title from "../technologies/Title";

export default function Experience() {
  return (
    <>
      <Title title="Experience" />
      <div className="flex justify-center items-center">
        <ol class="relative border-l-[1.5px] border-amber-200 mt-10">
          {EXPERIENCE.map((text) => (
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -start-1.5 border border-white" />
              <time class="mb-1 text-xl mt-2 font-bold leading-none text-emerald-200">
                {text.time}
              </time>
              <h3 class="text-xl font-semibold text-gray-300">{text.ttile}</h3>
              <p class="mb-4 mt-2 text-lg font-extrabold md:max-w-screen-md sm:max-w-screen-sm text-white ">
                {text.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
