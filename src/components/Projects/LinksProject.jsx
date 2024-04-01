import Links from "../header/icons/Links";

export default function LinkProject({ text, children }) {
  return (
    <>
      <Links
        className="border-[2px] border-yellow-700 rounded-md flex md:flex-row sm:flex-col justify-center items-center
        text-xl text-yellow-200 py-2 transition md:hover:scale-95 md:gap-x-8 md:mt-1
        sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95"
        text={text}
      >
        {children}
      </Links>
    </>
  );
}
