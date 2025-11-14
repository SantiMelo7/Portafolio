import { useLocale, useTranslations } from "next-intl";

import { ArrowLeft, Languages, Moon, SunMoon } from "lucide-react";

import "./ActionsHeader.styled.css";
import { useRouter } from "next/navigation";

const ActionsHeader = ({ theme, setTheme, redirect, isRedirect, url }) => {
  const translateGeneric = useTranslations("Generic");

  const localActive = useLocale();

  const router = useRouter();

  const onSelectChange = (ev) => {
    const nextLocale = ev.target.value;
    if (redirect) {
      router.replace(`/${nextLocale}${url}`);
    } else {
      router.replace(`/${nextLocale}`);
    }
  };

  const handleChangeTheme = () => {
    setTheme((prevStateTheme) =>
      prevStateTheme === "light" ? "dark" : "light"
    );
  };

  const buttons = [
    {
      key: "theme",
      show: true,
      onClick: handleChangeTheme,
      icon:
        theme === "dark" ? (
          <Moon className="icon-header" />
        ) : (
          <SunMoon className="icon-header" />
        ),
    },
    {
      key: "back",
      show: isRedirect,
      onClick: () => router.replace(`/`),
      icon: <ArrowLeft className="icon-header" />,
    },
  ];

  return (
    <>
      <label htmlFor="language" className="label-languages">
        <Languages className="icon-header" />
      </label>

      <select
        id="language"
        value={localActive}
        className="select-languages"
        onChange={onSelectChange}
      >
        <option value="id">{translateGeneric("language-english")}</option>
        <option value="es">{translateGeneric("language-spanish")}</option>
      </select>

      {buttons
        ?.filter((btn) => btn?.show)
        ?.map((btn) => (
          <button key={btn?.key} onClick={btn?.onClick}>
            {btn?.icon}
          </button>
        ))}
    </>
  );
};

export default ActionsHeader;
