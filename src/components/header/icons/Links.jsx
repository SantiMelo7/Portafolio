export default function Links({ href, className, text, children }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      {children}
    </a>
  );
}
