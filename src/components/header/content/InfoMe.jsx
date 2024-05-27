import SubText from "./SubText";

export default function InfoMe() {
  return (
    <section className="lg:grid lg:grid-cols-2 max-w-screen-2xl mx-auto lg:h-[80vh] md:h-[70vh] sm:h-[125vh]">
      <div className="flex flex-row lg:justify-start sm:justify-center ">
        <SubText />
      </div>
      <div className="flex lg:justify-end relative lg:my-auto lg:mx-auto lg:right-0 sm:top-2 sm:right-3">
        <img
          src="./content/audifonos.webp"
          className="banner lg:w-[350px] sm:w-[130px]"
        />
      </div>
    </section>
  );
}
