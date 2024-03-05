export default function ButtonProjects({ href, children }) {
  return (
    <div className="mt-3">
      <a
        href={href}
        className="bg-transparent flex sm:justify-center transition md:hover:scale-110 sm:w-52 md:gap-x-10 md:mt-1
        sm:px-8 sm:gap-x-4 sm:mt-4 sm:hover:scale-95"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
}
