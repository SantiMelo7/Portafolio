/* eslint-disable @next/next/no-img-element */
import InfoMe from "../../components/header/content/InfoMe";
import Projects from "../../components/projects/Projects";
import Technology from "../../components/technologies/Technology";
import Experience from "../../components/experience/Experience";
import AboutMe from "../../components/aboutMe/AboutMe";
import Preference from "../../components/header/content/Preference";

export default function Home() {
    return (
        <>
            <Preference url={false} isRedirect={false} />
            <InfoMe />
            <Projects />
            <Experience />
            <Technology />
            <AboutMe />
            <div className="max-w-full">
                <img className="min-w-full" alt="Fondo" src="https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&section=footer&reversal=true" />
            </div>
        </>
    )
}