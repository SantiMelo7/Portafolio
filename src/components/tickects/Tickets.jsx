"use client";

import { useEffect, useState } from "react";
import Title from "../technologies/Title";
import ButtonsTickets from "../layout/ButtonsTickets";

export default function Tickets() {
  const [count, setCount] = useState(() => {
    const countLocal = parseInt(window.localStorage.getItem("count")) || 0;
    return countLocal;
  });
  const [sprint, setSprint] = useState(() => {
    const sprintLocal = parseInt(window.localStorage.getItem("sprint")) || 0;
    return sprintLocal;
  });
  const [projects, setProjects] = useState(() => {
    const projectsLocal =
      parseInt(window.localStorage.getItem("projects")) || 0;
    return projectsLocal;
  });
  const [admin, setAdmin] = useState(() => {
    const adminLocal = window.localStorage.getItem("admin") === "true";
    return adminLocal;
  });

  useEffect(() => {
    window.localStorage.setItem("count", count.toString());
    window.localStorage.setItem("sprint", sprint.toString());
    window.localStorage.setItem("projects", projects.toString());
    window.localStorage.setItem("admin", admin.toString());
  }, [count, sprint, projects, admin]);

  const handleClickCount = (action, setState, valueString, value) => {
    if (action === "increment") {
      setState((prevCount) => prevCount + 1);
    } else if (action === "decrement") {
      setState((prevCount) => prevCount - 1);
    }
    window.localStorage.setItem(valueString, value.toString());
  };

  const TICKETS = [
    {
      id: 1,
      title: "Complete Tickets",
      count: count,
    },
    {
      id: 2,
      title: "Sprint Finished",
      count: sprint,
    },
    {
      id: 3,
      title: "Complete Projects",
      count: projects,
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
                {text.count}
              </span>
            </div>
            {admin && (
              <div className="flex flex-row gap-5 max-w-screen-lg mx-auto mt-5">
                {text.id === 1 && (
                  <ButtonsTickets
                    handleClickButton={handleClickCount}
                    valueState={count}
                    valueKey="count"
                    valueSecondState={setCount}
                  />
                )}
                {text.id === 2 && (
                  <ButtonsTickets
                    handleClickButton={handleClickCount}
                    valueState={sprint}
                    valueKey="sprint"
                    valueSecondState={setSprint}
                  />
                )}
                {text.id === 3 && (
                  <ButtonsTickets
                    handleClickButton={handleClickCount}
                    valueState={projects}
                    valueKey="projects"
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
