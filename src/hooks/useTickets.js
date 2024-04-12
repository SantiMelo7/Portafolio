import { useState, useEffect } from "react";

export function useTickets() {
    const [count, setCount] = useState(0);
    const [sprint, setSprint] = useState(0);
    const [projects, setProjects] = useState(0);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const localCount = window.localStorage.getItem("count");
        setCount(localCount);
        const localSprint = window.localStorage.getItem("sprint");
        setSprint(localSprint);
        const localProjects = window.localStorage.getItem("projects");
        setProjects(localProjects);
        const localAdmin = JSON.parse(window.localStorage.getItem("projects"));
        setAdmin(localAdmin);
    }, []);

    const handleClickCount = (action, setState, valueKey) => {
        if (action === "increment") {
            setState((prevCount) => prevCount + 1);
        } else if (action === "decrement") {
            setState((prevCount) => prevCount - 1);
        }
        window.localStorage.getItem(`${valueKey}`);
    };

    return { count, setCount, sprint, setSprint, projects, setProjects, admin, setAdmin, handleClickCount }
}