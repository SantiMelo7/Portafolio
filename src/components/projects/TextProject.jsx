export default function TextProject({ text }) {
  return (
    <div className="mt-2 lg:text-start sm:text-center lg:p-0 sm:p-3 text-xl font-extrabold dark:font-bold text-gray-900 dark:text-slate-200">
      <p>{text}</p>
    </div>
  );
}
