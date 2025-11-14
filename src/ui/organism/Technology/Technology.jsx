import { TitleLine } from "../../atoms";
import { Tools } from "../../molecules";

import "./Technology.styled.css";

const Technology = () => {
  return (
    <section className="section-main-technology">
      <TitleLine translationKey="technology" />
      <Tools technology />
    </section>
  );
};

export default Technology;
