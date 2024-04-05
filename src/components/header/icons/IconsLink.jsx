import Links from "./Links";
import { GitHub, Linkedin } from "@/svg/IconsSvg";

export default function IconsLink() {
  return (
    <>
      <Links
        className="border-[3px] border-cyan-500 rounded-xl shadow-xl shadow-gray-500 flex justify-center items-center text-xl text-[#00FFF0] 
        transition md:hover:scale-110 hover:bg-white/30 sm:w-52 md:gap-x-4 md:mt-1 sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95"
        href={"https://github.com/SantiMelo7"}
        text="GitHub"
      >
        <GitHub />
      </Links>
      <Links
        className="border-[3px] border-cyan-500 rounded-xl shadow-xl shadow-gray-500 flex justify-center items-center text-xl text-[#00FFF0] 
        transition md:hover:scale-110 hover:bg-white/30 sm:w-52 md:gap-x-4 md:mt-1 sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95"
        href={"https://www.linkedin.com/in/santiago-melo-7b25732a5/"}
        text="Linkedin"
      >
        <Linkedin />
      </Links>
    </>
  );
}
