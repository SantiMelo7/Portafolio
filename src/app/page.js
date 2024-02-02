import InfoMe from "@/components/Header/Content/InfoMe";
import Technology from "@/components/Technologies/Technology";

export default function Home() {

    return (

        <>

            <div className='w-full relative'>
        
                <InfoMe></InfoMe>

                <img src="./headerImg.jpeg" className="w-full xl:h-[80vh] md:h-[70vh] sm:h-[95vh] object-cover object-top"></img>

            </div>

            <Technology></Technology>

        </>
        
    )

}