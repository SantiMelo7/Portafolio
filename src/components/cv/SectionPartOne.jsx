/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import MeImg from "../../../public/content/me.webp";
import { TECHNOLOGHIES } from "../../const/tec";

export default function SectionPartOne() {
  return (
    <>
      <div className="flex justify-center items-center mx-auto gap-10 p-2 md:max-w-full max-w-screen-xs">
        <Image
          src={MeImg.src}
          width={100}
          height={100}
          className="rounded-lg"
          alt="Santiago Melo"
        />
        <h1 className="dark:text-white text-blue-700 text-2xl sm:text-4xl">
          Santiago Cano Melo
        </h1>
      </div>
      <div className="grid md:grid-cols-12 mx-auto grid-cols-8 gap-5 p-8 md:p-0 md:mt-10">
        {TECHNOLOGHIES.map((text) => (
          <div key={text.key}>
            <img className="w-10" src={text.url} alt={text.text}></img>
          </div>
        ))}
      </div>
    </>
  );
}
