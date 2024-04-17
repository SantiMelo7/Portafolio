"use client";

import { useRouter } from "next/navigation";
import { DarkTheme, Language, SumTheme } from "../../../svg/IconsSvg";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
//import { useLanguage } from "../../../hooks/useTraduccion";

export default function Preference() {
  const [theme, setTheme] = useState("dark");
  console.log(theme);
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
    const nextLocale = ev.target.value;
    router.replace(`/${nextLocale}`);
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
        <button className="relative md:right-10 sm:right-2 mt-8 bottom-4 cursor-pointer">
          <Language />
        </button>
        <select
          defaultValue={localActive}
          className="flex w-18 h-8 absolute my-auto top-12 opacity-0 rounded-md cursor-pointer"
          onChange={onSelectChange}
        >
          <option value="es">Español</option>
          <option value="en">Ingles</option>
        </select>
      </div>
    </header>
  );
}
