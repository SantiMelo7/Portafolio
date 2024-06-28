export default function TextProject({ text }) {
  return (
    <div className="mt-2 lg:text-start sm:text-center text-xl font-extrabold dark:font-bold text-gray-900 dark:text-slate-200">
      <p>{text}</p>
    </div>
  );
}
