import InfoMe from "@/components/Header/Content/InfoMe";
import { Javascript, HTML, Postman } from "@/svg/IconsSvg";

export default function Home() {

    return (

        <>

            <div className='w-full relative'>
        
                <InfoMe></InfoMe>

                <img src="./headerImg.jpeg" className="w-full xl:h-[80vh] md:h-[60vh] sm:h-[107vh] object-cover object-top"></img>

                <Postman></Postman>

                <HTML></HTML>

            </div>
        
        </>
        
    )

}