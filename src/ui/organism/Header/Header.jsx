/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";

import { ImagePortfolio } from "../../atoms";
import { ActionsHeader } from "../../molecules";

import "./Header.styled.css";

const Header = ({ redirect = false, url = false, isRedirect = false }) => {
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

  return (
    <header className="container-header">
      <ImagePortfolio variant="Logo" />

      <div className="container-main-actions">
        <ActionsHeader
          theme={theme}
          setTheme={setTheme}
          redirect={redirect}
          isRedirect={isRedirect}
          url={url}
        />
      </div>
    </header>
  );
};

export default Header;
