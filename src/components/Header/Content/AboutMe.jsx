import IconsLink from "../Icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";

export default function AboutMe () {
  
    return (

        <>

            <div className="flex flex-col xl:mt-28 absolute sm:justify-center xl:max-w-2xl sm:max-w-screen-md lg:text-start sm:text-center sm:ml-4">
                
                <ImageHeader></ImageHeader>

                <div className="flex flex-col xl:ml-8 gap-4 mt-5 sm:p-2">

                    <h1 className="text-5xl font-bold text-primary">Hi, I'm Santiago Melo</h1>

                    <Paragrafh></Paragrafh>

                    <nav className="flex gap-x-10 xl:justify-center xl:items-center xl:flex-row sm:flex-col md:flex-row sm:items-center">
                    <IconsLink></IconsLink>
                    </nav>

                </div>

            </div>
        
        </>

    )

}
