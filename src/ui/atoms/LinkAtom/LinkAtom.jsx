import "./LinkAtom.styled.css";

const LinkAtom = ({ variant, href: propHref, children, disabled, ...rest }) => {
  const variants = {
    LinkProjects: {
      className: disabled ? "link-projects-disabled" : "link-projects",
    },
    ReferencesExperience: {
      href: "https://actosoft.com.mx/frontend",
      className: "link-references-experience-actosoft",
    },
  };

  const { className, href } = variants[variant] || {};

  return (
    <a
      href={propHref || href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
};
export default LinkAtom;
