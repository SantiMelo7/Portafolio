import { useState, useEffect } from "react";

export function useTickets() {
    const [count, setCount] = useState(0);
    const [sprint, setSprint] = useState(0);
    const [projects, setProjects] = useState(0);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const localCount = window.localStorage.setItem("count", count);
        setCount(localCount);
        const localSprint = window.localStorage.setItem("sprint", sprint);
        setSprint(localSprint);
        const localProjects = window.localStorage.setItem("projects", projects);
        setProjects(localProjects);
        const localAdmin = window.localStorage.setItem("admin", admin);
        setAdmin(localAdmin);
        window.localStorage.getItem("projects",);
        window.localStorage.getItem("count",);
        window.localStorage.getItem("projects",);
        window.localStorage.getItem("admin",);
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