import Me from "../../../public/me.png"
import Image from "next/image";

export default function ImageHeader() {

    return (
        
        <div className="flex md:flex-row sm:flex-col justify-start items-center gap-4 lg:pl-10 lg:mt-1 sm:mt-4">
 
            <Image src={Me} className="rounded-xl" alt="Santi" style={{width: 100, height: "auto"}}></Image>

            <h1 className="text-4xl font-bold text-gray-300">Hi, I'm Santiago Melo</h1>

        </div>
        
    )

}