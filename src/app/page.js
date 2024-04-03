import InfoMe from "../components/Header/Content/InfoMe";
import Projects from "../components/Projects/Projects";
import Technology from "../components/Technologies/Technology";
import Experience from "../sections/Experience";

export default function Home() {
    return (
        <>
            <div className='w-full relative'>
                <InfoMe />
                <img src="./headerImg.webp" className="w-full xl:h-[65vh] lg:h-[80vh] md:h-[58vh] sm:h-[90vh] object-cover object-top" />
            </div>
            <Projects />
            <Experience />
            <Technology />
        </>
    )
}