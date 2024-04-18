export default function TitleInitial({ text, className }) {
  return (
    <h1
      className={`${className} font-bold text-blue-600 dark:text-primary mt-10`}
    >
      {text}
    </h1>
  );
}
