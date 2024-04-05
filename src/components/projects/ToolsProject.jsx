import LinkProject from "./LinksProject";

// temporal
export function Toolsproject({ projectId }) {
  return (
    <>
      {projectId.next && <LinkProject>{projectId.next}</LinkProject>}
      {projectId.react && <LinkProject>{projectId.react}</LinkProject>}
      {projectId.vercel && <LinkProject>{projectId.vercel}</LinkProject>}
      {projectId.vite && <LinkProject>{projectId.vite}</LinkProject>}
      {projectId.tailwind && <LinkProject>{projectId.tailwind}</LinkProject>}
      {projectId.css && <LinkProject>{projectId.css}</LinkProject>}
      {projectId.reactRouterDom && (
        <LinkProject>{projectId.reactRouterDom}</LinkProject>
      )}
      {projectId.styledComponents && (
        <LinkProject>{projectId.styledComponents}</LinkProject>
      )}
      {projectId.axios && <LinkProject>{projectId.axios}</LinkProject>}
      {projectId.mongo && <LinkProject>{projectId.mongo}</LinkProject>}
      {projectId.postman && <LinkProject>{projectId.postman}</LinkProject>}
      {projectId.materialUi && (
        <LinkProject>{projectId.materialUi}</LinkProject>
      )}
      {projectId.netifly && <LinkProject>{projectId.netifly}</LinkProject>}
    </>
  );
}
