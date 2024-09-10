"use client";

import { ArrowLeft, Languages, Moon, SunMoon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react/cjs/react.production.min";

export default function PreferenceCv() {

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
    <header className="flex flex-row w-full justify-between z-[1000] items-center top-0 p-2 absolute">
      <img src="/favicon/android-chrome-192x192.png" className="md:h-[80px] h-[75px]" alt="Logo Page"/>
      <div className="container-center">
        <label htmlFor="language" className="translate-x-12">
          <Languages className="size-8 dark:text-white text-black" />
        </label>
        <select id="language" value={localActive} className="relative -translate-x-4 opacity-0"
          onChange={onSelectChange}
        >
          <option value="id">Ingles</option>
          <option value="es">Español</option>
        </select>
        <button onClick={handleChangeTheme} className="mr-3">
          {theme === "dark" ? <Moon className="size-8 dark:text-white text-black" /> : <SunMoon className="size-8 dark:text-white text-black" />}
        </button>
        {isRedirect && (
          <button onClick={() => router.replace(`/`)}>
            <ArrowLeft />
          </button>
        )}
      </div>
    </header>
  );
}