import SectionProject from "@/components/projects/SectionProject";
import ProjectBottom from "@/components/projects/ProjectBottom";
import LinkProject from "@/components/projects/LinksProject";
import {
  Javascript,
  ReactJs,
  NextJs,
  Axios,
  StyledComponents,
} from "@/svg/IconsSvg";

export default function EntrepreneurPlataform() {
  return (
    <SectionProject
      className="h-[50%]"
      src="/entrepeneur-platform.webp"
      title="Entrepeneur Platform"
      subTitle="Aplicación creada con Next Js, utilizando React, haciendo un ecommerce de un Restaurant, utilizando la base de datos de MongoDB y probando los endpoint con Postman, ademas de utilizar Tailwind como framework de css. El reto principal en este projecto fue aplicar todo lo aprendido durante muchos meses"
    >
      <div className="grid grid-cols-2 gap-y-3 mt-3 gap-x-4">
        <LinkProject>
          <NextJs width={20} />
        </LinkProject>
        <LinkProject>
          <ReactJs width={20} />
        </LinkProject>
        <LinkProject>
          <Javascript width={20} />
        </LinkProject>
        <LinkProject>
          <Axios width={20} />
        </LinkProject>
      </div>
      <div className="mt-3">
        <LinkProject>
          <StyledComponents width={32} />
        </LinkProject>
      </div>
      <>
        <ProjectBottom hrefGitHub="" hrefLink="" />
      </>
    </SectionProject>
  );
}
