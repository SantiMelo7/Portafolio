/* eslint-disable @next/next/no-img-element */
import { TECHNOLOGHIES } from "../../const/tec";
import LinkProject from "./LinksProject";

export function Toolsproject({ tools }) {
  const techElements = Object.keys(tools).map((key) => {
    const tech = TECHNOLOGHIES.find((item) => item.text === key);
    if (tech) {
      return (
        <>
          <LinkProject className="min-w-[8rem] px-5">
            <img src={tech.url} width={20} alt={tech.text} />
            <h1 className="font-extrabold text-center dark:text-white text-black">{tech.text}</h1>
          </LinkProject>
        </>
      );
    }
    return null;
  });

  return <>{techElements}</>;
}
