"use client";

import { useRouter } from "next/navigation";
import { DarkTheme, Language, SumTheme } from "../../../svg/IconsSvg";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export default function Preference() {
  const [theme, setTheme] = useState("dark");
  const router = useRouter();
  const localActive = useLocale();

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

  const onSelectChange = (ev) => {
    const nexLocale = ev.target.value;
    router.replace(`/${nexLocale}`);
  };

  return (
    <header className="flex flex-row justify-between top-0">
      <img
        src="/favicon/android-chrome-192x192.png"
        className="md:h-[100px] sm:h-[75px] "
      />
      <div className="flex gap-x-5">
        <button
          onClick={handleChangeTheme}
          className="relative md:right-10 sm:right-2 cursor-pointer "
        >
          {theme === "dark" ? <DarkTheme /> : <SumTheme />}
        </button>
        <div className="relative md:right-10 sm:right-2 mt-8 cursor-pointer">
          <Language />
        </div>
        <select
          defaultValue={localActive}
          className="flex w-18 h-8 absolute my-auto top-20 rounded-md"
          onChange={onSelectChange}
        >
          <option value="en">Español</option>
          <option value="id">English</option>
        </select>
      </div>
    </header>
  );
}

/*
  () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }
*/
