export default function Title({ title }) {
  return (
    <div className="flex justify-center items-center gap-x-3">
      <h1 className="sm:text-3xl text-2xl pl-3 font-extrabold text-amber-900 dark:text-white">{title}</h1>
      <div className="w-full border-[1px] h-0" />
    </div>
  );
}
