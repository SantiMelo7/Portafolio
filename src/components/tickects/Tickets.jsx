"use client";

import { useEffect, useState } from "react";
import Title from "../technologies/Title";
import ButtonsTickets from "../layout/ButtonsTickets";

export default function Tickets() {
  const [count, setCount] = useState(0);
  const [sprint, setSprint] = useState(0);
  const [projects, setProjects] = useState(0);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("count", count);
    window.localStorage.setItem("sprint", sprint);
    window.localStorage.setItem("projects", projects);
    window.localStorage.setItem("admin", admin);
    const localCount = window.localStorage.getItem("count");
    setCount(localCount);
    const localSprint = window.localStorage.getItem("sprint");
    setSprint(localSprint);
    const localProjects = window.localStorage.getItem("projects");
    setProjects(localProjects);
    const localAdmin = JSON.parse(window.localStorage.getItem("projects"));
    setAdmin(localAdmin);
  }, []);

  const handleClickCount = (action, setState) => {
    if (action === "increment") {
      setState((prevCount) => prevCount + 1);
    } else if (action === "decrement") {
      setState((prevCount) => prevCount - 1);
    }
  };

  const TICKETS = [
    {
      id: 1,
      title: "Complete Tickets",
      count: "count",
    },
    {
      id: 2,
      title: "Sprint Finished",
      count: "sprint",
    },
    {
      id: 3,
      title: "Complete Projects",
      count: "projects",
    },
  ];

  return (
    <>
      <Title title="Tickets" />
      <section className="lg:grid lg:grid-cols-3 sm:flex sm:flex-col gap-x-10 lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm sm:gap-y-5 mx-auto mt-8 ">
        {TICKETS.map((text) => (
          <div key={text.id}>
            <div className="flex flex-col border-b-[3px] border-green-500 bg-black-900 text-black hover:scale-110 hover:skew-x-1">
              <h1 className="text-3xl font-extrabold text-blue-200 text-center">
                {text.title}
              </h1>
              <span className="text-center font-bold text-3xl mt-5 mb-3 text-orange-400 animate-pulse">
                {text.count === "count" && count}
                {text.count === "sprint" && sprint}
                {text.count === "projects" && projects}
              </span>
            </div>
            {!admin && (
              <div className="flex flex-row gap-5 max-w-screen-lg mx-auto mt-5">
                {text.id === 1 && (
                  <ButtonsTickets
                    handleClickButton={handleClickCount}
                    valueSecondState={setCount}
                  />
                )}
                {text.id === 2 && (
                  <ButtonsTickets
                    handleClickButton={handleClickCount}
                    valueSecondState={setSprint}
                  />
                )}
                {text.id === 3 && (
                  <ButtonsTickets
                    handleClickButton={handleClickCount}
                    valueSecondState={setProjects}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
