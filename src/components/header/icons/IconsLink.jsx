import Links from "./Links";
import { Curriculum, GitHub, Gmail, Linkedin } from "../../../svg/IconsSvg";

export default function IconsLink() {
  return (
    <nav className="icons-link-perfil">
      <div className="containers-link">
        <Links
          className="w-56 cv"
          href={"https://github.com/SantiMelo7"}
          text="GitHub"
        >
          <GitHub fill="rgb(0 255 240)" />
        </Links>
        <Links
          className="w-56 cv"
          href={"https://www.linkedin.com/in/santiago-melo-7b25732a5/"}
          text="Linkedin"
        >
          <Linkedin />
        </Links>
        <Links
          className="w-56 cv"
          href={"mailto:santiagocano15cr7@gmail.com"}
          text="Contáctame"
        >
          <Gmail />
        </Links>
      </div>
      <div className="flex xl:justify-start xl:-translate-x-0 md:translate-x-5 sm:justify-center">
        <Links
          className="md:w-52 sm:w-56 py-2 px-3 cv"
          href={"https://curriculum-dev.vercel.app/"}
          text="Ver CV"
        >
          <Curriculum />
        </Links>
      </div>
    </nav>
  );
}
