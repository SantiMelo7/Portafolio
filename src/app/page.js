import InfoMe from "@/components/Header/Content/InfoMe";
import Projects from "@/components/Projects/Projects";
import Technology from "@/components/Technologies/Technology";

export default function Home() {
    return (
        <>
            <div className='w-full relative'>
                <InfoMe />
                <img src="./headerImg.webp" className="w-full xl:h-[80vh] md:h-[58vh] sm:h-[105vh] object-cover object-top"></img>
            </div>
            <Projects />
            <Technology />
        </>
    )
}