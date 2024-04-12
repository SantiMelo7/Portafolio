import Me from "../../../../public/content/me.webp";
import Image from "next/image";

export default function ImageHeader() {
  return (
    <div className="flex lg:flex-row sm:flex-col lg:justify-start lg:mt-28 items-center gap-4 lg:pl-10 sm:mt-4">
      <Image
        src={Me}
        className="rounded-xl"
        alt="Santi"
        style={{ width: 100, height: "auto" }}
      />
      <div className="border-[3px] border-[#C0EE9C] py-1 px-4">
        <h2 className="text-xl font-extrabold">Available to work</h2>
      </div>
    </div>
  );
}
