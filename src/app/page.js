import InfoMe from "@/components/Header/InfoMe";

export default function Home() {

    return (
        
        <div className='w-full relative'>
        
            <InfoMe></InfoMe>
        
            <img src="./headerImg.jpeg" className="w-full md:h-[70vh] sm:h-[115vh] object-cover object-top"></img>
        
        </div>
        
    )

}