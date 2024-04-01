import InfoMe from "@/components/header/content/InfoMe";
import Projects from "@/components/projects/Projects";
import Technology from "@/components/technologies/Technology";
import Title from "@/components/technologies/Title";
import Experience from "@/sections/Experience";

export default function Home() {
    return (
        <>
            <div className='w-full relative'>
                <InfoMe />
                <img src="./headerImg.webp" className="w-full xl:h-[65vh] lg:h-[80vh] md:h-[58vh] sm:h-[90vh] object-cover object-top" />
            </div>
            <Title title="Experience" />
            <div className='flex justify-center items-center max-w-screen-2xl mx-auto mt-10'>
                <Experience />
            </div>
            <Projects />
            <Technology />
        </>
    )
}