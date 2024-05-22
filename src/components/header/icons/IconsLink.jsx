import Links from "./Links";
import { Curriculum, GitHub, Gmail, Linkedin } from "../../../svg/IconsSvg";

export default function IconsLink() {
  return (
    <nav className="icons-link-perfil">
      <div className="md:flex gap-x-6 mx-auto">
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
          href={"https://www.google.com/intl/es-419/gmail/about/"}
          text="Contáctame"
        >
          <Gmail />
        </Links>
      </div>
      <div className="flex md:justify-start sm:mb-16 md:mb-10 sm:justify-center">
        <Links
          className="md:w-52 sm:w-56 py-3 px-3 cv"
          href={"https://curriculum-dev.vercel.app/"}
          text="Ver CV"
        >
          <Curriculum />
        </Links>
      </div>
    </nav>
  );
}
