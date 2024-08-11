import Links from "./Links";
import { Curriculum, GitHub, Gmail, Linkedin } from "../../../svg/IconsSvg";

export default function IconsLink() {
  return (
    <nav className="icons-link-perfil">
      <div className="containers-link">
        <Links
          className="max-w-full cv"
          href={"https://github.com/SantiMelo7"}
          text="GitHub"
        >
          <GitHub  />
        </Links>
        <Links
          className="max-w-full cv"
          href={"https://www.linkedin.com/in/santiago-melo-7b25732a5/"}
          text="Linkedin"
        >
          <Linkedin />
        </Links>
        <Links
          className="max-w-full cv"
          href={"mailto:santiagocano15cr7@gmail.com"}
          text="Contáctame"
        >
          <Gmail />
        </Links>
        <Links
          className="max-w-full sm:py-3 cv"
          href={"https://curriculum-dev.vercel.app/"}
          text="Ver CV"
        >
          <Curriculum />
        </Links>
      </div>
    </nav>
  );
}
