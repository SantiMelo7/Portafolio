import InfoMe from "@/components/Header/Content/InfoMe";

export default function Home() {

    return (
        
        <div className='w-full relative'>
        
            <InfoMe></InfoMe>

            <img src="./headerImg.jpeg" className="w-full md:h-[83vh] sm:h-[120vh] object-cover object-top"></img>
        
        </div>
        
    )

}