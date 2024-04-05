export default function Title({ title }) {
  return (
    <div className="flex xl:justify-center md:justify-start items-center gap-x-4 mt-10">
      <h1 className="text-4xl md:text-3xl sm:text-2xl sm:pl-3">{title}</h1>
      <div className="xl:h-[2px] sm:h-[3px] shadow-2xl shadow-gray-500 bg-white relative top-1 xl:max-w-[60%] md:max-w-[70%] sm:max-w-[60%] divLine"></div>
    </div>
  );
}
