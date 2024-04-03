import Title from "../Technologies/Title";
import Tesla from "@/sections/Tesla";
import Ecommerce from "@/sections/Ecommerce";
import EntrepreneurPlataform from "@/sections/EntrepeneurPlataform";

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <section className="max-w-6xl mx-auto shadow-xl">
        <EntrepreneurPlataform />
        <Ecommerce />
        <Tesla />
      </section>
    </>
  );
}
