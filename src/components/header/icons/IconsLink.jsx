import Links from "./Links";
import { GitHub, Gmail, Linkedin } from "../../../svg/IconsSvg";

export default function IconsLink() {
  return (
    <nav className="icons-link-perfil">
      <Links
        className="w-52 cv"
        href={"https://github.com/SantiMelo7"}
        text="GitHub"
      >
        <GitHub />
      </Links>
      <Links
        className="w-52 cv"
        href={"https://www.linkedin.com/in/santiago-melo-7b25732a5/"}
        text="Linkedin"
      >
        <Linkedin />
      </Links>
      <div className="md:w-62 mx-auto">
        <Links
          className="sm:w-58 cv"
          href={"https://www.google.com/intl/es-419/gmail/about/"}
          text="Contáctame"
        >
          <Gmail />
        </Links>
      </div>
    </nav>
  );
}
