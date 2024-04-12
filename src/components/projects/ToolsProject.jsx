import LinkProject from "./LinksProject";

// temporal

const classNameToolsNormal = "md:w-[210px] sm:w-[180px]";
const classNameToolsBigger = "md:w-[25vh]";
const classNameToolsLg = "md:w-[31vh]";
const classNameToolsXl = "md:w-[37vh]";
export function Toolsproject({ projectId }) {
  return (
    <>
      {projectId.react && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.react}
        </LinkProject>
      )}
      {projectId.next && (
        <LinkProject className={classNameToolsNormal}>
          {projectId.next}
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
        <LinkProject>{projectId.styledComponents}</LinkProject>
      )}
      {projectId.reactRouterDom && (
        <LinkProject className={classNameToolsLg}>
          {projectId.reactRouterDom}
        </LinkProject>
      )}
    </>
  );
}
