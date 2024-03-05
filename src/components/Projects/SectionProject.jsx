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
    <div className="flex flex-col justify-center items-center mx-auto mb-3 hover:transition-all">
      <img
        src={src}
        className={`${className} rounded-[5px] md:w-full sm:w-[350px]`}
      />
      <>
        <TitleInitial text={title} className="text-3xl mt-3" />
        <TextProject text={subTitle} />
        <h1 className="text-xl text-center text-white mt-3">Tecnologías</h1>
        {children}
      </>
    </div>
  );
}
