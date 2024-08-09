import LinkProject from "./LinksProject";

export function Toolsproject({ projectId }) {
  return (
    <>
      {projectId.html && (
        <LinkProject className="classNameToolsNormal">
          {projectId.html}
        </LinkProject>
      )}
      {projectId.javascript && (
        <LinkProject className="classNameToolsNormal">
          {projectId.javascript}
        </LinkProject>
      )}
      {projectId.next && (
        <LinkProject className="classNameToolsNormal">
          {projectId.next}
        </LinkProject>
      )}
      {projectId.react && (
        <LinkProject className="classNameToolsNormal">
          {projectId.react}
        </LinkProject>
      )}
      {projectId.typescript && (
        <LinkProject className="classNameToolsNormal">
          {projectId.typescript}
        </LinkProject>
      )}
      {projectId.tailwind && (
        <LinkProject className="classNameToolsNormal">
          {projectId.tailwind}
        </LinkProject>
      )}
      {projectId.css && (
        <LinkProject className="classNameToolsNormal">
          {projectId.css}
        </LinkProject>
      )}
      {projectId.sass && (
        <LinkProject className="classNameToolsNormal">
          {projectId.sass}
        </LinkProject>
      )}
      {projectId.axios && (
        <LinkProject className="classNameToolsNormal">
          {projectId.axios}
        </LinkProject>
      )}
      {projectId.postman && (
        <LinkProject className="classNameToolsNormal">
          {projectId.postman}
        </LinkProject>
      )}
      {projectId.vite && (
        <LinkProject className="classNameToolsNormal">
          {projectId.vite}
        </LinkProject>
      )}
      {projectId.vercel && (
        <LinkProject className="classNameToolsNormal">
          {projectId.vercel}
        </LinkProject>
      )}
      {projectId.netifly && (
        <LinkProject className="classNameToolsNormal">
          {projectId.netifly}
        </LinkProject>
      )}
       {projectId.prisma && (
        <LinkProject className="classNameToolsNormal">
          {projectId.prisma}
        </LinkProject>
      )}
      {projectId.mongo && (
        <LinkProject className="classNameToolsBigger">
          {projectId.mongo}
        </LinkProject>
      )}
      {projectId.materialUi && (
        <LinkProject className="classNameToolsBigger">
          {projectId.materialUi}
        </LinkProject>
      )}
      {projectId.reactRouterDom && (
        <LinkProject className="classNameToolsLg">
          {projectId.reactRouterDom}
        </LinkProject>
      )}
      {projectId.auth && (
        <LinkProject className="classNameToolsNormal">
          {projectId.auth}
        </LinkProject>
      )}
      {projectId.firebase && (
        <LinkProject className="classNameToolsNormal">
          {projectId.firebase}
        </LinkProject>
      )}
      {projectId.firebaseHosting && (
        <LinkProject className="classNameToolsNormal">
          {projectId.firebaseHosting}
        </LinkProject>
      )}
      {projectId.styledComponents && (
        <LinkProject className="classNameToolsNormal">
          {projectId.styledComponents}
        </LinkProject>
      )}
      {projectId.antdDesign && (
        <LinkProject className="classNameToolsLg">
          {projectId.antdDesign}
        </LinkProject>
      )}
    </>
  );
}
