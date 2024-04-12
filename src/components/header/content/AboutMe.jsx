import { Gmail } from "@/svg/IconsSvg";
import TitleInitial from "../../../components/layout/TitleInitial";
import IconsLink from "../icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";
import Links from "../icons/Links";

export default function AboutMe() {
  return (
    <>
      <div
        className="flex flex-col md:top-0 sm:top-14 absolute sm:justify-center md:max-w-2xl sm:max-w-screen-md
        lg:text-start sm:text-center lg:ml-10"
      >
        <ImageHeader />
        <div className="flex flex-col xl:ml-8 gap-4 mt-2 sm:p-1">
          <TitleInitial text="Hi, I'm Santiago Melo" className="text-5xl" />
          <Paragrafh />
          <nav className="flex md:flex-row sm:flex-col gap-x-10 justify-center items-center">
            <IconsLink />
          </nav>
          <div className="w-62 mx-auto">
            <Links
              className="sm:w-58 cv"
              href={"https://www.google.com/intl/es-419/gmail/about/"}
              text="Contáctame"
            >
              <Gmail />
            </Links>
          </div>
        </div>
      </div>
    </>
  );
}
