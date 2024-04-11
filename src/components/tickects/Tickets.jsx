"use client";

import { useState } from "react";
import Title from "../technologies/Title";

export default function Tickets() {
  const [count, setCount] = useState(0);
  const handleClickIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <Title title="Tickets" />
      <section
        className="lg:grid lg:grid-cols-3 sm:flex sm:flex-col gap-x-10 lg:max-w-screen-lg sm:max-w-screen-sm sm:gap-y-5
        mx-auto mt-8 "
      >
        <div
          className="flex flex-col border-b-[3px] border-green-500
         bg-black-900 text-black"
        >
          <h1 className="text-3xl font-extrabold text-blue-200 text-center">
            Completed Tickets
          </h1>
          <span className="text-center font-bold text-3xl mt-5 mb-3 text-orange-400 animate-pulse">
            {count}
          </span>
        </div>
        <div
          className="flex flex-col border-b-[3px] border-green-500
         bg-black-900 text-black"
        >
          <h1 className="text-3xl font-extrabold text-blue-200 text-center">
            Completed Tickets
          </h1>
          <span className="text-center font-bold text-3xl mt-5 mb-3 text-orange-400 animate-pulse">
            {count}
          </span>
        </div>
        <div
          className="flex flex-col border-b-[3px] border-green-500
         bg-black-900 text-black"
        >
          <h1 className="text-3xl font-extrabold text-blue-200 text-center">
            Completed Tickets
          </h1>
          <span className="text-center font-bold text-3xl mt-5 mb-3 text-orange-400 animate-pulse">
            {count}
          </span>
        </div>
      </section>
      <div className="">
        <button
          onClick={handleClickIncrement}
          className="py-2 px-10 hover:scale-105 hover:bg-black/70 hover:text-white
        bg-slate-400 w-32 rounded-md text-xl font-extravold text-black "
        >
          +1
        </button>
      </div>
    </>
  );
}
