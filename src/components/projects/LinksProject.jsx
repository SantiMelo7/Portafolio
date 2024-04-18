import Links from "../header/icons/Links";

export default function LinkProject({ text, className, children }) {
  return (
    <>
      <Links
        className={`border-[2.5px] dark:border-[1.7px] border-amber-600 dark:border-yellow-500
        rounded-md flex md:flex-row sm:flex-col justify-center items-center
        text-xl py-1 transition md:hover:scale-95 md:gap-x-8 md:mt-1
        sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95 w-96 dark:bg-transparent bg-slate-500 dark:bg-slate-100 ${className}`}
        text={text}
      >
        {children}
      </Links>
    </>
  );
}
