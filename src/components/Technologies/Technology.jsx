import SectionTechnologies from "./SectionTecnologies";
import Title from "./Title";

export default function Technology() {
  return (
    <>
      <Title title="Technologies" />
      <div className="flex flex-col max-w-5xl mx-auto">
        <SectionTechnologies />
      </div>
    </>
  );
}
