/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import {
  DarkTheme,
  Language,
  RedirectHome,
  SumTheme,
} from "../../../svg/IconsSvg";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export default function Preference({ url, isRedirect }) {
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
    if (url) {
      router.replace(`/${nextLocale}/desing-projects`);
    } else {
      router.replace(`/${nextLocale}`);
    }
  };

  return (
    <header className="container-preference">
      <img
        src="/favicon/android-chrome-192x192.png"
        className="logo-page-main"
        alt="Logo Page"
      />
      <div className="container-center">
        <label htmlFor="language" className="language">
          <Language />
        </label>
        <select
          id="language"
          value={localActive}
          className="select-new-language"
          onChange={onSelectChange}
        >
          <option value="id">Ingles</option>
          <option value="es">Español</option>
        </select>
        <button onClick={handleChangeTheme} className="summary-button">
          {theme === "dark" ? <DarkTheme /> : <SumTheme />}
        </button>
        {isRedirect && (
          <button className="redirect-home" onClick={() => router.replace(`/`)}>
            <RedirectHome />
          </button>
        )}
      </div>
    </header>
  );
}
