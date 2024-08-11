/* eslint-disable @next/next/no-img-element */
import SubText from "./SubText";

export default function InfoMe() {
  return (
    <>
      <section className="container-info-me">
        <SubText />
        <div className="lg:flex hidden justify-center items-center mx-auto">
          <img
            src="./content/audifonos.webp"
            className="banner"
            alt="Representation Me"
          />
        </div>
    </section>
    </>

  );
}
