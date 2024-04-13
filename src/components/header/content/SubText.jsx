import TitleInitial from "../../layout/TitleInitial";
import IconsLink from "../icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";

export default function SubText() {
  return (
    <>
      <div
        className="flex flex-col md:top-0 sm:top-14 absolute sm:justify-center md:max-w-2xl sm:max-w-screen-sm
        lg:text-start sm:text-center lg:ml-20"
      >
        <ImageHeader />
        <div className="flex flex-col xl:ml-8 gap-4 mt-2 sm:p-1">
          <TitleInitial text="Hi, I'm Santiago Melo" className="text-5xl" />
          <Paragrafh />
          <IconsLink />
        </div>
      </div>
    </>
  );
}
