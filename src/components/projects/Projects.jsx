import TextProject from "./TextProject";
import ContentProjects from "./ContentProjects";
import { useProjects } from "../../hooks/useTraduccion";
import { PROJECTS } from "../../const/projects";

export default function Projects() {
  const { t1, t2, t3, t4, t5, t6, t7 } = useProjects();
  const getDescription = (id) => {
    switch (id) {
      case 1:
        return t1("description-1");
      case 2:
        return t2("description-2");
      case 3:
        return t3("description-3");
      case 4:
        return t4("description-4");
      case 5:
        return t5("description-5");
      case 6:
        return t6("description-6");
      case 7:
        return t7("description-7");
      default:
        return "";
    }
  };

  return (
    <ContentProjects line data={PROJECTS}>
      {(project) => (
        <TextProject text={getDescription(project.id)} />
      )}
    </ContentProjects>
  );
}
