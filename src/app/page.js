import InfoMe from "@/components/header/content/InfoMe";
import Projects from "@/components/projects/Projects";
import Technology from "@/components/technologies/Technology";
import Experience from "@/components/experience/Experience";
import Tickets from "@/components/tickects/Tickets";

export default function Home() {
    return (
        <>
            <div className='relative'>
                <InfoMe />
                <img src="./headerImg.webp" className="w-full xl:h-[65vh] lg:h-[80vh] md:h-[58vh] sm:h-[90vh] object-cover object-top" />
            </div>
            <Projects />
            <Experience />
            <Tickets />
            <Technology />
        </>
    )
}