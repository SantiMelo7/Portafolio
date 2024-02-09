import InfoMe from "@/components/Header/Content/InfoMe";
import Projects from "@/components/Projects/Projects";
import Technology from "@/components/Technologies/Technology";

export default function Home() {

    return (

        <>

            <div className='w-full relative'>
        
                <InfoMe></InfoMe>

                <img src="./headerImg.jpeg" className="w-full xl:h-[80vh] md:h-[58vh] sm:h-[90vh] object-cover object-top"></img>

            </div>

            <Technology></Technology>

            <Projects></Projects>

        </>
        
    )

}