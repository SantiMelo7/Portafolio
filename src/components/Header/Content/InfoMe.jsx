import AboutMe from "./AboutMe";

export default function InfoMe() {
  return (
    <>
      <section className="sm:flex-col md:-top-20 sm:mt-2 absolute xl:w-[600px] md:w-[450px] sm:w-[370px] xl:left-52">
        <AboutMe />
        <div className="flex md:justify-end md:items-end relative md:top-48 lg:left-3/4 md:left-72">
          <img
            src="./audifonos.webp"
            className="banner xl:w-[40%] md:w-[50%] sm:w-[28%]"
          />
        </div>
      </section>
    </>
  );
}
