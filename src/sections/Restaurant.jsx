"use client";

import LinkProject from "@/components/Projects/LinksProject";
import ProjectBottom from "@/components/Projects/ProjectBottom";
import SectionProject from "@/components/Projects/SectionProject";
import {
  Javascript,
  NextJs,
  ReactJs,
  Talwind,
  MongoDB,
  Postman,
} from "../svg/IconsSvg";

export default function Restaurant() {
  return (
    <SectionProject
      className="h-[50%]"
      src="/restaurant.webp"
      title="Shop Restaurant"
      subTitle="Aplicación creada con Next Js, utilizando React, haciendo un ecommerce de un Restaurant,
      utilizando la base de datos de MongoDB y probando los endpoint con Postman,
      ademas de utilizar Tailwind como framework de css.
      El reto principal en este projecto fue aplicar todo lo aprendido durante muchos meses  "
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
          <Talwind width={20} />
        </LinkProject>
        <LinkProject>
          <MongoDB width={20} />
        </LinkProject>
        <LinkProject>
          <Postman width={20} />
        </LinkProject>
      </div>
      <ProjectBottom
        hrefGitHub="https://github.com/SantiMelo7/Ecommerce"
        hrefLink="https://restaurantshop.netlify.app/"
      />
    </SectionProject>
  );
}
