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
    const countLocal = window.localStorage.getItem("count");
    setCount(countLocal);
    const sprintLocal = window.localStorage.getItem("sprint");
    setSprint(sprintLocal);
    const projectsLocal = window.localStorage.getItem("projects");
    setProjects(projectsLocal);
    const LOCAL_ADMIN = JSON.parse(window.localStorage.getItem("admin"));
    setAdmin(LOCAL_ADMIN);
  }, []);

  const handleClickCount = (action, setState, valueString, value) => {
    if (action === "increment") {
      setState((prevCount) => prevCount + 1);
    } else if (action == "decrement") {
      setState((prevCount) => prevCount - 1);
    }
    window.localStorage.setItem(`${valueString}`, value);
  };

  const TICKETS = [
    {
      id: 1,
      title: "Complete Tickets",
    },
    {
      id: 2,
      title: "Sprint Finished",
    },
    {
      id: 3,
      title: "Complete Projects",
    },
  ];
  return (
    <>
      <Title title="Tickets" />
      <section
        className="lg:grid lg:grid-cols-3 sm:flex sm:flex-col gap-x-10 lg:max-w-screen-lg md:max-w-screen-md
        sm:max-w-screen-sm sm:gap-y-5 mx-auto mt-8 "
      >
        {TICKETS.map((text) => (
          <div key={text.id}>
            <div
              className="flex flex-col border-b-[3px] border-green-500
                bg-black-900 text-black hover:scale-110 hover:skew-x-1"
            >
              <h1 className="text-3xl font-extrabold text-blue-200 text-center">
                {text.title}
              </h1>
              <span className="text-center font-bold text-3xl mt-5 mb-3 text-orange-400 animate-pulse">
                {text.id === 1 && count}
                {text.id === 2 && sprint}
                {text.id === 3 && projects}
              </span>
            </div>
            {admin && (
              <div className="flex flex-row gap-5 max-w-screen-lg mx-auto mt-5">
                <ButtonsTickets
                  map={text.id === 1}
                  handleClickButton={handleClickCount}
                  valueState={count}
                  valueKey="count"
                  valueSecondState={setCount}
                />
                <ButtonsTickets
                  map={text.id === 2}
                  handleClickButton={handleClickCount}
                  valueState={sprint}
                  valueKey="sprint"
                  valueSecondState={setSprint}
                />
                <ButtonsTickets
                  map={text.id === 3}
                  handleClickButton={handleClickCount}
                  valueState={projects}
                  valueKey="projects"
                  valueSecondState={setProjects}
                />
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
