import SubText from "./SubText";

export default function InfoMe() {
  return (
    <section className="xl:grid xl:grid-cols-2 max-w-screen-2xl mx-auto sm:-translate-y-0 xl:-translate-y-6">
      <div className="flex flex-row xl:justify-start sm:justify-center ">
        <SubText />
      </div>
      <div className="flex relative lg:my-auto lg:mx-auto lg:right-0 sm:top-2 sm:right-3">
        <img
          src="./content/audifonos.webp"
          className="banner lg:w-[350px] sm:w-[130px]"
        />
      </div>
    </section>
  );
}
