"use client";

import { DarkTheme, SumTheme, Theme } from "@/svg/IconsSvg";
import { useEffect, useState } from "react";

/*
  () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }
*/

export default function Preference() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevStateTheme) =>
      prevStateTheme === "light" ? "dark" : "light"
    );
  };
  return (
    <header className="flex flex-row justify-between top-0">
      <img
        src="/favicon/android-chrome-192x192.png"
        className="md:h-[100px] sm:h-[75px] "
      />
      <button
        onClick={handleChangeTheme}
        className="relative md:right-10 sm:right-2 bottom-2"
      >
        {theme === "dark" ? <DarkTheme /> : <SumTheme />}
      </button>
    </header>
  );
}
