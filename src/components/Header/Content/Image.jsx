import Me from "../../../../public/me.png"
import Image from "next/image";

export default function ImageHeader() {

    return (
        
        <div className="flex md:flex-row sm:flex-col justify-start items-center gap-4 lg:pl-10 lg:mt-1 sm:mt-4">
 
            <Image src={Me} className="rounded-xl" alt="Santi" style={{width: 100, height: "auto"}}></Image>

            <div className="border-[3px] border-gray-500 py-1 px-4">

                <h2 className="text-xl font-extrabold">Disponible Para Trabajar</h2>

            </div>

        </div>
        
    )

}