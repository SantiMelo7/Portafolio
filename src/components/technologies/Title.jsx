export default function Title({ title }) {
  return (
    <div className="flex md:justify-center sm:justify-start items-center gap-x-4 mt-10">
      <h1 className="text-4xl md:text-3xl sm:text-2xl sm:pl-3">{title}</h1>
      <div
        className={`h-[3px] shadow-2xl shadow-gray-500 bg-white relative
        top-1 lg:max-w-7xl divLine`}
      />
    </div>
  );
}
