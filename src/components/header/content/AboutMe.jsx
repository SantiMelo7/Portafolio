import TitleInitial from "../../../components/layout/TitleInitial";
import IconsLink from "../icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col xl:mt-32 absolute sm:justify-center xl:max-w-2xl sm:max-w-screen-md lg:text-start sm:text-center sm:ml-4">
        <ImageHeader />
        <div className="flex flex-col xl:ml-8 gap-4 mt-2 sm:p-2">
          <TitleInitial text="Hi, I'm Santiago Melo" className="text-5xl" />
          <Paragrafh />
          <nav className="flex gap-x-10 xl:justify-center xl:items-center xl:flex-row sm:flex-col md:flex-row sm:items-center">
            <IconsLink />
          </nav>
        </div>
      </div>
    </>
  );
}
