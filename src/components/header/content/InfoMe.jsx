/* eslint-disable @next/next/no-img-element */
import SubText from "./SubText";

export default function InfoMe() {
  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-2xl mt-6 mx-auto">
        <SubText />
        <div className="lg:flex hidden justify-center items-center mx-auto">
          <img src="./content/audifonos.webp" className="animate-photoMove flex md:w-[350px] w-[130px]" alt="Representation Me" />
        </div>
      </section>
    </>
  );
}
