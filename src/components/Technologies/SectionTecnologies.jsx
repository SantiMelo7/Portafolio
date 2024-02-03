import { Javascript, HTML, Postman, CssSvg, ReactJs, NextJs, MongoDB, Git, MaterialUi, GitHubSvg, Talwind, Vite,  } from "@/svg/IconsSvg";
import DivTec from "./DivTec";

export default function SectionTechnologies() {

    return (
        
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm sm:ml-10 gap-10 mt-10">

            <DivTec><HTML></HTML></DivTec>
            
            <DivTec><CssSvg></CssSvg></DivTec>

            <DivTec><Javascript></Javascript></DivTec>

            <DivTec><ReactJs></ReactJs></DivTec>

            <DivTec><NextJs></NextJs></DivTec>

            <DivTec><Talwind></Talwind></DivTec>
            
            <DivTec><Git></Git></DivTec>

            <DivTec><GitHubSvg></GitHubSvg></DivTec>

            <DivTec><MongoDB></MongoDB></DivTec>
            
            <DivTec><Postman></Postman></DivTec>

            <DivTec><Vite></Vite></DivTec>

            <DivTec><MaterialUi></MaterialUi></DivTec>

        </div>
        
    )


}