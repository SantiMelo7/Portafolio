import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function usePreference(url, redirect) {
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
        if (redirect) {
            router.replace(`/${nextLocale}${url}`);
        } else {
            router.replace(`/${nextLocale}`);
        }
    };

    return {
        theme, localActive, handleChangeTheme, onSelectChange
    }

}