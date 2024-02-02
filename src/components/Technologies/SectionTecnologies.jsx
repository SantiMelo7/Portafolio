import { Javascript, HTML, Postman, CssSvg, ReactJs, NextJs, MongoDB, Git, MaterialUi, GitHubSvg, Talwind, Vite,  } from "@/svg/IconsSvg";
import DivTec from "./DivTec";

export default function SectionTechnologies() {

    return (
        
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:max-w-screen-xl md:max-w-screen-md gap-10 mt-10">

            <DivTec><HTML></HTML></DivTec>
            
            <DivTec><CssSvg></CssSvg></DivTec>

            <DivTec><Javascript></Javascript></DivTec>

            <DivTec><ReactJs></ReactJs></DivTec>

            <DivTec><Talwind></Talwind></DivTec>

            <DivTec><NextJs></NextJs></DivTec>

            <DivTec><MongoDB></MongoDB></DivTec>
            
            <DivTec><Postman></Postman></DivTec>

            <DivTec><MaterialUi></MaterialUi></DivTec>

            <DivTec><Git></Git></DivTec>

            <DivTec><GitHubSvg></GitHubSvg></DivTec>

            <DivTec><Vite></Vite></DivTec>

        </div>
        
    )


}