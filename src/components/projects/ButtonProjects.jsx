export default function ButtonProjects({ href, children, className }) {
  return (
    <div className="container-buttons-projects">
      <a
        href={href}
        target="_blank"
        role="link"
        className={`container-links ${className}`}
      >
        {children}
      </a>
    </div>
  );
}
