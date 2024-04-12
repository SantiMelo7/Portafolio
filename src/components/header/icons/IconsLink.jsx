import Links from "./Links";
import { GitHub, Linkedin } from "@/svg/IconsSvg";

export default function IconsLink() {
  return (
    <>
      <Links
        className="sm:w-52 cv"
        href={"https://github.com/SantiMelo7"}
        text="GitHub"
      >
        <GitHub />
      </Links>
      <Links
        className="sm:w-52 cv"
        href={"https://www.linkedin.com/in/santiago-melo-7b25732a5/"}
        text="Linkedin"
      >
        <Linkedin />
      </Links>
    </>
  );
}
