import Links from "../header/icons/Links";

export default function LinkProject({ text, className, href, children }) {
  return (
    <Links className={`link-project ${className}`} text={text} href={href}>
      {children}
    </Links>
  );
}
