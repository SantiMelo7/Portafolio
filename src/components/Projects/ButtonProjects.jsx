export default function ButtonProjects({ href, children }) {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-transparent transition
      md:hover:scale-110 sm:w-52 md:gap-x-4 md:mt-1 sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
