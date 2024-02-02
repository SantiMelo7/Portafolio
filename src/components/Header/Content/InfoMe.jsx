import AboutMe from "./AboutMe";

export default function InfoMe() {

    return (

        <>

            <section className="sm:flex-col md:-top-20 sm:mt-2 z-auto absolute w-[800px] md:left-52">

                <AboutMe></AboutMe>

                <div className="flex justify-end items-end relative top-48 left-1/2 right-0">

                    <img src="./audifonos.jpeg" className="banner sm:disabled"></img>

                </div>

            </section>

        </>    

    )

}