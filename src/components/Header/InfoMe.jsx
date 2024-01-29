import Image from "next/image";
import Me from "../../../public/me.png"
import AboutMe from "./AboutMe";
import { GitHub, Linkedin, Email } from "@/svg/IconsSvg";
import Link from "next/link";

export default function InfoMe() {

    return (

        <>

            <section className="flex justify-center lg:mt-10 lg:flex-row sm:flex-col sm:mt-5">
            
                <AboutMe></AboutMe>

                <div className="flex justify-center items-center lg:pl-10 lg:mt-1 sm:mt-4">
 
                    <Image src={Me} className="rounded-md" alt="Santi" style={{width: 247, height: "auto"}}></Image>
 
                </div>

            </section>
        
        </>
        
    )

}