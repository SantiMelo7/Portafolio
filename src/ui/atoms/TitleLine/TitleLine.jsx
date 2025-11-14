import { useTranslations } from "next-intl";

import "./TitleLine.styled.css";

const TitleLine = ({ translationKey, title = true }) => {
  const translateLine = useTranslations("Title-Line");

  return (
    <>
      {title && (
        <div className="container-main-line-title">
          <h1 className="line-title">{translateLine(translationKey)}</h1>
          <div className="line-title-border" />
        </div>
      )}
    </>
  );
};

export default TitleLine;
