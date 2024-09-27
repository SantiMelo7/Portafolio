import { workExperienceData } from "./data";
import ContentLayout from "./ContentLayout";
import { useCurriculum, useExperience } from "../../hooks/useTraduccion";

export default function SectionPartThree() {

  const { t1: curriculum } = useCurriculum()
  const { t22, t23, t1, t6, t7, t10 } = useExperience();

  const getTimeTab1 = (id) => {
    switch (id) {
      case 1:
        return t1("time-2");
      case 2:
        return t22("time-3");
      case 3:
        return t23("time-4");
      default:
        return "";
    }
  };
  const getDescription = (id) => {
    switch (id) {
      case 1:
        return t6("description-experience-2");
      case 2:
        return t7("description-experience-3");
      case 3:
        return t10("description-experience-5");
      default:
        return "";
    }
  };

  return (
    <>
      <ContentLayout title={curriculum("section-2")} />
      {workExperienceData.map((text) => (
        <div key={text.key} className="mx-auto">
          <div className="flex md:justify-start md:items-start justify-center md:ml-10 lg:ml-0 gap-6">
            <h3 className="text-2xl font-medium text-blue-800 dark:text-blue-500 mt-2">
              {getTimeTab1(text.key)}
            </h3>
            <h3 className="text-2xl font-medium text-blue-800 dark:text-blue-500 mt-2">
              {text.tab2}
            </h3>
          </div>
          <div className="xl:max-w-screen-lg max-w-screen-md mt-5 flex justify-center items-center mb-4 md:p-2 p-4">
            <p className="dark:text-white text-black text-center text-xl font-medium"> {getDescription(text.key)}</p>
          </div>
        </div>
      ))}
    </>
  );
}
