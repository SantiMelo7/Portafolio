import {
  Javascript,
  HTML,
  Postman,
  CssSvg,
  ReactJs,
  NextJs,
  MongoDB,
  Git,
  MaterialUi,
  GitHubSvg,
  Talwind,
  Vite,
  Axios,
  StyledComponents,
} from "@/svg/IconsSvg";
import DivTec from "./DivTec";

export default function SectionTechnologies() {
  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm sm:ml-10 gap-10 mt-10">
      <DivTec>
        <HTML />
      </DivTec>
      <DivTec>
        <CssSvg />
      </DivTec>
      <DivTec>
        <Javascript />
      </DivTec>
      <DivTec>
        <ReactJs />
      </DivTec>
      <DivTec>
        <NextJs />
      </DivTec>
      <DivTec>
        <Talwind />
      </DivTec>
      <DivTec>
        <StyledComponents />
      </DivTec>
      <DivTec>
        <Git />
      </DivTec>
      <DivTec>
        <GitHubSvg />
      </DivTec>
      <DivTec>
        <MongoDB />
      </DivTec>
      <DivTec>
        <Postman />
      </DivTec>
      <DivTec>
        <Axios />
      </DivTec>
      <DivTec>
        <Vite />
      </DivTec>
      <DivTec>
        <MaterialUi />
      </DivTec>
    </div>
  );
}
