"use client";

import { useRouter } from "next/navigation";
import { DarkTheme, Language, SumTheme } from "../../../svg/IconsSvg";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export default function Preference() {
  const [colorTheme, setColorTheme] = useState("");

  const [theme, setTheme] = useState(() => {
    if (!colorTheme) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const colorThemeEffect = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setColorTheme(colorThemeEffect);

    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme, colorTheme]);

  const router = useRouter();
  const localActive = useLocale();

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
      <div className="flex md:flex-row sm:flex-col gap-x-5">
        <label
          htmlFor="language"
          className="relative md:right-10 sm:right-5 mt-8 bottom-4 cursor-pointer"
        >
          <Language />
        </label>
        <select
          id="language"
          value={localActive}
          className="flex w-8 h-8 absolute right-[98px] top-9 opacity-0 rounded-md cursor-pointer"
          onChange={onSelectChange}
        >
          <option value="id">Ingles</option>
          <option value="es">Español</option>
        </select>
        <button
          onClick={handleChangeTheme}
          className="relative md:right-10 sm:right-5 md:bottom-4 cursor-pointer "
        >
          {theme === "dark" ? <DarkTheme /> : <SumTheme />}
        </button>
      </div>
    </header>
  );
}
