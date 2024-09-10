export default function ContentLayout({ title }) {
  return (
    <>
      <div className="border-[1px] border-gray-400 mt-8 w-[80%] mx-auto" />
      <h1 className="text-2xl font-extrabold uppercase mt-6 text-red-600 mx-auto">
        {title}
      </h1>
    </>
  );
}
