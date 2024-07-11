import LinkProject from "./LinksProject";

// temporal
const classNameToolsNormal = "md:w-[210px] sm:w-[180px]";
const classNameToolsBigger = "md:w-[230px] sm:w-[180px]";
const classNameToolsLg = "md:w-[290px] sm:w-[245px] sm:h-17";
const classNameToolsXl =
  "md:w-[285px] md:flex md:h-10 sm:h-17 sm:grid sm:grid-cols-2 sm:pl-2 sm:w-[200px] sm:mx-auto";
export function Toolsproject({ projectId }) {
  return (
    <>
      {projectId.html && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.html}
        </LinkProject>
      )}
      {projectId.javascript && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.javascript}
        </LinkProject>
      )}
      {projectId.next && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.next}
        </LinkProject>
      )}
      {projectId.react && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.react}
        </LinkProject>
      )}
      {projectId.typescript && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.typescript}
        </LinkProject>
      )}
      {projectId.tailwind && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.tailwind}
        </LinkProject>
      )}
      {projectId.css && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.css}
        </LinkProject>
      )}
      {projectId.axios && (
        <LinkProject className={`${classNameToolsNormal}`}>
          {projectId.axios}
        </LinkProject>
      )}
      {projectId.postman && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.postman}
        </LinkProject>
      )}
      {projectId.vite && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.vite}
        </LinkProject>
      )}
      {projectId.vercel && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.vercel}
        </LinkProject>
      )}
      {projectId.netifly && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.netifly}
        </LinkProject>
      )}
      {projectId.mongo && (
        <LinkProject className={classNameToolsBigger}>
          {projectId.mongo}
        </LinkProject>
      )}
      {projectId.materialUi && (
        <LinkProject className={classNameToolsBigger}>
          {projectId.materialUi}
        </LinkProject>
      )}
      {projectId.styledComponents && (
        <LinkProject className={classNameToolsXl}>
          {projectId.styledComponents}
        </LinkProject>
      )}
      {projectId.reactRouterDom && (
        <LinkProject className={classNameToolsLg}>
          {projectId.reactRouterDom}
        </LinkProject>
      )}
      {projectId.auth && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.auth}
        </LinkProject>
      )}
      {projectId.firebase && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.firebase}
        </LinkProject>
      )}
      {projectId.antdDesign && (
        <LinkProject className={classNameToolsLg}>
          {projectId.antdDesign}
        </LinkProject>
      )}
    </>
  );
}
