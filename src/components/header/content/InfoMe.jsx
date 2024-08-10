/* eslint-disable @next/next/no-img-element */
import SubText from "./SubText";

export default function InfoMe() {
  return (
    <section className="container-info-me">
      <div className="container-text">
        <SubText />
      </div>
      <div className="container-img-me">
        <img
          src="./content/audifonos.webp"
          className="banner"
          alt="Representation Me"
        />
      </div>
    </section>
  );
}
