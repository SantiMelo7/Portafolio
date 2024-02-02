import IconsLink from "../Icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";

export default function AboutMe () {
  
    return (

        <>

            <div className="flex flex-col xl:mt-28 absolute md:justify-center xl:max-w-2xl sm:max-w-sm lg:text-start sm:text-center">
                
                <ImageHeader></ImageHeader>

                <div className="flex flex-col xl:ml-8 gap-4 mt-5 text-lg sm:p-2">

                    <h1 className="text-4xl font-bold text-gray-200">Hi, I'm Santiago Melo</h1>

                    <h2 className="font-bold text-3xl text-gray-300 mt-4">Fronted Developer</h2>

                    <Paragrafh></Paragrafh>

                    <nav className="flex gap-x-10 xl:justify-center xl:items-center xl:flex-row sm:flex-col sm:items-center">
                    <IconsLink></IconsLink>
                    </nav>

                </div>

            </div>
        
        </>

    )

}
