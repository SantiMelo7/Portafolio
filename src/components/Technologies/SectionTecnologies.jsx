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
  Jira,
  Vercel,
} from "@/svg/IconsSvg";
import DivTec from "./DivTec";

export default function SectionTechnologies() {
  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm sm:ml-10 gap-10 mt-10">
      <DivTec>
        <HTML width={60} />
      </DivTec>
      <DivTec>
        <CssSvg width={60} />
      </DivTec>
      <DivTec>
        <Javascript width={60} />
      </DivTec>
      <DivTec>
        <ReactJs width={60} />
      </DivTec>
      <DivTec>
        <NextJs width={60} />
      </DivTec>
      <DivTec>
        <Talwind width={60} />
      </DivTec>
      <DivTec>
        <StyledComponents width={60} />
      </DivTec>
      <DivTec>
        <Git width={60} />
      </DivTec>
      <DivTec>
        <GitHubSvg width={60} />
      </DivTec>
      <DivTec>
        <MongoDB width={60} />
      </DivTec>
      <DivTec>
        <Postman width={60} />
      </DivTec>
      <DivTec>
        <Axios width={60} />
      </DivTec>
      <DivTec>
        <Vite width={60} />
      </DivTec>
      <DivTec>
        <MaterialUi width={60} />
      </DivTec>
      <DivTec>
        <Jira width={60} />
      </DivTec>
      <DivTec>
        <Vercel width={60} />
      </DivTec>
    </div>
  );
}
