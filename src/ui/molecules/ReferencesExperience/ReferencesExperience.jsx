/* eslint-disable @next/next/no-img-element */

import { Check, Clock, FolderCog } from "lucide-react";

import { ImagePortfolio, LinkAtom } from "../../atoms";

import "./ReferencesExperience.styled.css";

const ReferencesExperience = ({ translationsExperience }) => {
  return (
    <>
      <ImagePortfolio variant="Organizations" />

      <LinkAtom variant="ReferencesExperience">
        <ImagePortfolio variant="Actosoft" classVariant />

        <h3 className="title-experience">
          {translationsExperience("Title.title-5")}
        </h3>
      </LinkAtom>

      <div className="container-main-reference">
        <ImagePortfolio variant="Repositories" />

        <div className="container-icon-reference">
          <Clock className="icon-clock-reference" />
          <Clock className="icon-clock-reference" />
          <Check className="icon-check-reference" />
        </div>
      </div>

      <div className="container-folder-reference">
        <FolderCog />

        {translationsExperience("Ref.ref-1")}
      </div>

      <ImagePortfolio variant="Referencies" />
    </>
  );
};

export default ReferencesExperience;
