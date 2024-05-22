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
        className="md:h-[100px] sm:h-[75px]"
      />
      <div className="flex justify-center">
        <label htmlFor="language" className="relative md:top-8 sm:top-5 left-8">
          <Language />
        </label>
        <select
          id="language"
          value={localActive}
          className="relative h-5 lg:top-10 lg:right-10 sm:right-5 sm:top-7 md:top-10 opacity-0"
          onChange={onSelectChange}
        >
          <option value="id">Ingles</option>
          <option value="es">Español</option>
        </select>
        <button onClick={handleChangeTheme} className="mr-3">
          {theme === "dark" ? <DarkTheme /> : <SumTheme />}
        </button>
      </div>
    </header>
  );
}
