import Links from "./Links";
import { GitHub, Linkedin } from "@/svg/IconsSvg";

export default function IconsLink() {

    return (
        
        <>

            <Links href={"https://github.com/SantiMelo7"}>
    
                <GitHub></GitHub> GitHub

            </Links>

            <Links href={"https://www.linkedin.com/in/santiago-melo-7b25732a5/"}>
            
                <Linkedin></Linkedin> Linkedin

            </Links>
        
        </>
        
    )

}