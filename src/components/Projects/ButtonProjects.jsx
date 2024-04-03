export default function ButtonProjects({ href, children }) {
  return (
    <div className="mt-3">
      <a
        href={href}
        role="link"
        className="flex items-center gap-x-4 justify-center rounded-xl
        text-white transition bg-gray-800 border px-3
        border-gray-600 text-lg hover:scale-105 hover:bg-slate-400"
      >
        {children}
      </a>
    </div>
  );
}
