export default function Links({ href, className, children, disabled, text }) {
  return (
    <a
      disabled={disabled}
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
