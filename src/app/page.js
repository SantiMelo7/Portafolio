import InfoMe from "@/components/header/content/InfoMe";
import Projects from "@/components/projects/Projects";
import Technology from "@/components/technologies/Technology";
import Experience from "@/components/experience/Experience";
import AboutMe from "@/components/aboutMe/AboutMe";
import Preference from "@/components/header/content/Preference";

export default function Home() {
    return (
        <>
            <Preference />
            <InfoMe />
            <Projects />
            <Experience />
            {/* <Tickets />*/}
            <Technology />
            <AboutMe />
        </>
    )
}