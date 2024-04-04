export default function ButtonProjects({ href, children, className }) {
  return (
    <div className="mt-3">
      <a
        href={href}
        role="link"
        className={`flex items-center gap-x-4 justify-center rounded-xl transition border px-3 text-lg hover:scale-105 ${className}`}
      >
        {children}
      </a>
    </div>
  );
}
