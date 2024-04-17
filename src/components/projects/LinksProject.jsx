import Links from "../header/icons/Links";

export default function LinkProject({ text, className, children }) {
  return (
    <>
      <Links
        className={`border-[1.7px] border-blue-500 dark:border-yellow-500
        rounded-md flex md:flex-row sm:flex-col justify-center items-center
        text-xl text-gray-800 dark:text-yellow-200 py-1 transition md:hover:scale-95 md:gap-x-8 md:mt-1
        sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95 w-96 ${className}`}
        text={text}
      >
        {children}
      </Links>
    </>
  );
}
