import Links from "../Header/Icons/Links";

export default function LinkProject({ text, children }) {
  return (
    <div className="grid grid-cols-2 gap-y-3 mt-3 gap-x-4">
      <Links
        className="border-[3px] border-cyan-500 rounded-xl shadow-xl shadow-gray-500 flex justify-center items-center text-xl text-[#00FFF0]
      transition md:hover:scale-110 hover:bg-white/30 sm:w-52 md:gap-x-8 md:mt-1 sm:px-12 sm:gap-x-4 sm:mt-4 sm:hover:scale-95"
        text={text}
      >
        {children}
      </Links>
    </div>
  );
}
