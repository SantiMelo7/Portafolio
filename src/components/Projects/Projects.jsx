import Title from "../Technologies/Title";
import Tesla from "@/sections/Tesla";
import Restaurant from "@/sections/Restaurant";
import EntrepreneurPlataform from "@/sections/EntrepeneurPlataform";

export default function Projects() {
  return (
    <>
      <Title title="Projects" />
      <section className="grid md:grid-cols-2 sm:grid-cols-1 max-w-4xl gap-[50px] mx-auto mt-10 shadow-xl mb-5">
        <EntrepreneurPlataform />
        <Restaurant />
        <Tesla />
      </section>
    </>
  );
}
