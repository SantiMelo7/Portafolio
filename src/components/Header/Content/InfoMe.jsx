import AboutMe from "./AboutMe";

export default function InfoMe() {

    return (

        <>

            <section className="sm:flex-col md:-top-20 sm:mt-2 z-auto absolute xl:w-[700px] md:w-[450px] sm:w-[370px] xl:left-52 md:left-16">

                <AboutMe></AboutMe>

                <div className="flex md:justify-end md:items-end relative md:top-48 md:left-1/2 md:right-0">

                    <img src="./audifonos.jpeg" className="banner xl:w-[40%] md:w-[50%] sm:w-[28%]"></img>

                </div>

            </section>

        </>    

    )

}