import AboutMe from "./AboutMe";

// xl:w-[50%] md:w-[50%] sm:w-[28%]
export default function InfoMe() {
  return (
    <section className="lg:grid lg:grid-cols-2 max-w-screen-2xl mx-auto lg:h-[70vh] md:h-[45vh] sm:h-[90vh]">
      <div className="flex flex-row lg:justify-start sm:justify-center ">
        <AboutMe />
      </div>
      <div className="flex lg:justify-end relative lg:my-auto lg:mx-auto sm:top-2">
        <img
          src="./content/audifonos.webp"
          className="banner lg:w-[350px] sm:w-[130px]"
        />
      </div>
    </section>
  );
}
