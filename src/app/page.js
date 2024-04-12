import InfoMe from "@/components/header/content/InfoMe";
import Projects from "@/components/projects/Projects";
import Technology from "@/components/technologies/Technology";
import Experience from "@/components/experience/Experience";
import Tickets from "@/components/tickects/Tickets";

export default function Home() {
    return (
        <>
            <img src="/favicon/android-chrome-192x192.png"
                className="md:h-[100px] sm:h-[75px] lg:fixed"
            />
            {/*<img src="./headerImg.webp" className="w-full h-[100%]
            xl:h-[65vh] absolute lg:h-[80vh] md:h-[58vh] sm:h-[90vh] object-cover object-top" />*/}
            <InfoMe />
            <Projects />
            <Experience />
            <Tickets />
            <Technology />
        </>
    )
}