import TitleInitial from "../layout/TitleInitial";
import TextProject from "./TextProject";

export default function SectionProject({
  src,
  title,
  subTitle,
  className,
  children,
}) {
  return (
    <div className="md:grid md:grid-cols-2 justify-center items-center mx-auto hover:transition-all ">
      <img src={src} className={`${className} rounded-2xl w-[50vh] mt-10 `} />
      <div className="flex flex-col sm:justify-center sm:items-center md:justify-start md:items-start mt-5">
        <TitleInitial text={title} className="text-3xl" />
        <TextProject text={subTitle} />
        {children}
      </div>
    </div>
  );
}
