/* eslint-disable @next/next/no-img-element */
import SubText from "./SubText";

export default function InfoMe() {
  return (
    <>
      <section className="container-info-me">
        <SubText />
        <div className="lg:flex hidden justify-center items-center mx-auto">
          <img src="./content/audifonos.webp" className="animate-photoMove flex md:w-[350px] w-[130px]" alt="Representation Me" />
        </div>
    </section>
    </>

  );
}
