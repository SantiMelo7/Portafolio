import TextProject from "../../../components/projects/TextProject";
import ContentProjects from "../../../components/projects/ContentProjects";
import { useProjectsDesing } from "../../../hooks/useTraduccion";
import { projectsDesing } from "../../../const/projects";
import Preference from "../../../components/header/content/Preference";

export default function Projects() {
    const { t1, t2, t3, t4, t5, t6, t7, t8 } = useProjectsDesing();

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
            case 8:
                return t8("description-8")
            default:
                return "";
        }
    };

    return (
        <>
            <Preference />
            <ContentProjects line={false} data={projectsDesing}>
                {(project) => (
                    <TextProject text={getDescription(project.id)} />
                )}
            </ContentProjects>
        </>
    );
}
