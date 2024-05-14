import Links from "./Links";
import { Curriculum, GitHub, Gmail, Linkedin } from "../../../svg/IconsSvg";

export default function IconsLink() {
  return (
    <nav className="icons-link-perfil">
      <div className="mx-auto md:flex gap-x-4 mb-2">
        <Links
          className="w-58 cv"
          href={"https://github.com/SantiMelo7"}
          text="GitHub"
        >
          <GitHub />
        </Links>
        <Links
          className="w-58 cv"
          href={"https://www.linkedin.com/in/santiago-melo-7b25732a5/"}
          text="Linkedin"
        >
          <Linkedin />
        </Links>
        <Links
          className="sm:w-58 cv"
          href={"https://www.google.com/intl/es-419/gmail/about/"}
          text="Contáctame"
        >
          <Gmail />
        </Links>
      </div>
      <div className="flex lg:justify-start lg:items-start sm:justify-center sm:items-center">
        <Links
          className="md:w-[200px] sm:w-[235px] py-3 px-3 cv"
          href={"https://curriculum-dev.vercel.app/"}
          text="Ver CV"
        >
          <Curriculum />
        </Links>
      </div>
    </nav>
  );
}
