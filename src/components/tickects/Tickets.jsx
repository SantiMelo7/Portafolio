"use client";

import Title from "../technologies/Title";
import { TICKETS } from "@/const/tickets";
import { useTickets } from "@/hooks/useTickets";
import ButtonsAdmin from "./ButtonsAdmin";

export default function Tickets() {
  const { count, sprint, projects, admin } = useTickets();

  return (
    <>
      <Title title="Tickets" />
      <section
        className="md:grid lg:grid-cols-3 md:grid-cols-2 sm:flex sm:flex-col gap-x-10
        lg:max-w-screen-lg md:max-w-2xl sm:max-w-screen-sm sm:gap-y-5 mx-auto mt-8 "
      >
        {TICKETS.map((text) => (
          <div key={text.id}>
            <div className="flex flex-col border-b-[3px] border-green-500 text-black hover:scale-110 hover:skew-x-1 tickets">
              <h1 className="text-3xl font-extrabold text-blue-200 text-center">
                {text.title}
              </h1>
              <span className="text-center font-bold text-3xl mt-5 mb-3 text-orange-400 animate-pulse">
                {text.id === 1 && count}
                {text.id === 2 && sprint}
                {text.id === 3 && projects}
              </span>
            </div>
            {admin ? <ButtonsAdmin value={text} /> : null}
          </div>
        ))}
      </section>
    </>
  );
}
