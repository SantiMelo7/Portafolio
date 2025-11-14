import { ReferencesExperience } from "../ReferencesExperience";

import "./CardExperience.styled.css";

const CardExperience = ({ experience, translationsExperience }) => {
  return (
    <li className="li-card-experience">
      <div className="circle-card-experience" />
      <time className="time-card-experience">{experience?.time}</time>
      <h3 className="title-card-experience">{experience?.title}</h3>

      {experience?.id === 4 && (
        <ReferencesExperience translationsExperience={translationsExperience} />
      )}

      <p className="description-card-experience">{experience?.description}</p>
    </li>
  );
};

export default CardExperience;
