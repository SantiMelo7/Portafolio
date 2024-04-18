export default function Title({ title }) {
  return (
    <div className="flex md:justify-center sm:justify-start items-center gap-x-4 mt-10">
      <h1 className="text-4xl md:text-3xl sm:text-2xl sm:pl-3 font-extrabold text-amber-900 dark:text-white">
        {title}
      </h1>
      <div className="divLine" />
    </div>
  );
}
