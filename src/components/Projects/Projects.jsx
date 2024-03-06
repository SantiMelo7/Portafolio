import Title from "../Technologies/Title";
import Tesla from "@/sections/Tesla";
import Ecommerce from "@/sections/Ecommerce";
import EntrepreneurPlataform from "@/sections/EntrepeneurPlataform";

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <section className="grid md:grid-cols-2 sm:grid-cols-1 max-w-6xl gap-[60px] mx-auto mt-10 shadow-xl mb-5">
        <EntrepreneurPlataform />
        <div>
          <Ecommerce />
        </div>
        <Tesla />
      </section>
    </>
  );
}
