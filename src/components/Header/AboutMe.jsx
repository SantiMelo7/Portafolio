import { Email, GitHub, Linkedin } from "@/svg/IconsSvg";
import Links from "./Links";

export default function AboutMe () {
  
    return (
        
        <div className="flex flex-col justify-center lg:max-w-md sm:max-w-sm lg:text-start sm:text-center">

            <h1 className="text-4xl font-bold text-gray-900">Hi, I'm Santiago Melo</h1>
      
            <h2 className="font-bold text-3xl text-gray-800 mt-4">Fronted Developer</h2>

            <div className="text-gray-700 mt-5 sm:text-lg sm:p-2">

                <p className="pb-1"> I am a Front-End Developer, with 1 year of experience in the world of web pages.
                    This year he worked mostly with React, Next JS, Talwind, as well as HTML, CSS and Javascript.
                </p>

                <p>
                    When programming day by day, I look for new challenges that make me able to demonstrate 
                    my skills and have work experiences that make me learn new things
                </p>

            </div>

            <nav className="flex gap-x-4">

                <Links href={"https://github.com/SantiMelo7"}>
            
                    <GitHub></GitHub>

                    GitHub

                </Links>

                <Links href={"https://github.com/SantiMelo7"}>
            
                    <Linkedin></Linkedin>

                    Linkedin

                </Links>

                <Links href={"https://github.com/SantiMelo7"}>
            
                    <Email></Email>

                    Email

                </Links>

            </nav>

        </div>
        
    )

}
