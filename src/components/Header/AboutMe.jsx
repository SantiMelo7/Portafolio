import IconsLink from "./Icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";

export default function AboutMe () {
  
    return (

        <>

            <div className="flex flex-col lg:mt-28 absolute md:justify-center md:max-w-2xl sm:max-w-sm lg:text-start sm:text-center">

                <ImageHeader></ImageHeader>

                <div className="flex flex-col md:ml-8 gap-4 mt-5 text-lg sm:p-2">

                    <h2 className="font-bold text-3xl text-gray-100 mt-4">Fronted Developer</h2>

                    <Paragrafh></Paragrafh>

                    <nav className="flex gap-x-4 md:justify-start md:flex-row sm:flex-col">
                    <IconsLink></IconsLink>
                    </nav>

                </div>

            </div>
        
        </>

    )

}
