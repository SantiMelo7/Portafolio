"use client";

<<<<<<< HEAD
import ProjectBottom from "@/components/projects/ProjectBottom";
import SectionProject from "@/components/projects/SectionProject";
=======
import LinkProject from "../components/Projects/LinksProject";
import ProjectBottom from "../components/projects/ProjectBottom";
import SectionProject from "../components/projects/SectionProject";
>>>>>>> 5855c04663eb1f5e6927d2999ad752af041d08a5
import {
  Javascript,
  NextJs,
  ReactJs,
  Talwind,
  MongoDB,
  Postman,
} from "../svg/IconsSvg";
import ButtonProjects from "@/components/projects/ButtonProjects";

export default function Ecommerce() {
  return (
    <SectionProject
      className="h-[10%]"
      src="/ecommerce.webp"
      title="Ecommerce"
      subTitle="Ecommerce application to be able to buy technology items, first website I made. Created with Next.JS, React, Tailwind and managing the MongoDB database"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 200px)",
          rowGap: "15px",
          marginTop: "12px",
          columnGap: "16px",
        }}
      >
        <ButtonProjects>
          <NextJs width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <ReactJs width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <Javascript width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <Talwind width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <MongoDB width={20} />
        </ButtonProjects>
        <ButtonProjects>
          <Postman width={20} />
        </ButtonProjects>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "15px",
          marginTop: "12px",
          columnGap: "16px",
        }}
      >
        <ProjectBottom
          hrefGitHub="https://github.com/SantiMelo7/Ecommerce"
          hrefLink="https://restaurantshop.netlify.app/"
        />
      </div>
    </SectionProject>
  );
}
