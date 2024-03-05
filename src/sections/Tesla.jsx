import LinkProject from "@/components/Projects/LinksProject";
import ProjectBottom from "@/components/Projects/ProjectBottom";
import SectionProject from "@/components/Projects/SectionProject";
import { Javascript, Vite, ReactJs, Talwind } from "@/svg/IconsSvg";

export default function Tesla() {
  return (
    <SectionProject
      src="/tesla.webp"
      title="Tesla Clon | Home"
      subTitle="Aplicación Clon de Tesla construida con Vite, donde utilizo React, en
      este caso para manejar el hover tan caracteristico de la página oficial
      de Tesla junto con Javascript, mi idea con este proyecto es demostrar
      mis habilidades en css, especificamente con la libreria de Tailwind la
      cual es la que mas utilizo en mi dia a dia"
    >
      <div className="grid grid-cols-2 gap-y-3 mt-3 gap-x-4">
        <LinkProject>
          <ReactJs width={20} />
        </LinkProject>
        <LinkProject>
          <Javascript width={20} />
        </LinkProject>
        <LinkProject>
          <Talwind width={20} />
        </LinkProject>
        <LinkProject>
          <Vite width={20} />
        </LinkProject>
      </div>
      <ProjectBottom
        hrefGitHub="https://github.com/SantiMelo7/Tesla-Clon-Home"
        hrefLink="https://tesla-clon-home.netlify.app/"
      />
    </SectionProject>
  );
}
