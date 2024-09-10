/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { usePreference } from "../../../hooks/usePreference"
import { ArrowLeft, Languages, Moon, SunMoon } from "lucide-react";

export default function Preference({ redirect, url, isRedirect }) {

  const { theme, localActive, handleChangeTheme, onSelectChange } = usePreference(url, redirect)

  const router = useRouter()

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
          <option value="id">Inglés</option>
          <option value="es">Español</option>
        </select>
        <button onClick={handleChangeTheme} className="mr-3">
          {theme === "dark" ? <Moon className="size-8 dark:text-white text-black" /> : <SunMoon className="size-8 dark:text-white text-black" />}
        </button>
        {isRedirect && (
          <button onClick={() => router.replace(`/`)}>
            <ArrowLeft className="size-8 dark:text-white text-black"   />
          </button>
        )}
      </div>
    </header>
  );
}
