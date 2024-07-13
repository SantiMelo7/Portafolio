import { TECHNOLOGHIES } from "../../const/tec";
import { useLineTitle } from "../../hooks/useTraduccion";
import Title from "./Title";

export default function Technology() {
  const { t3 } = useLineTitle();
  return (
    <>
      <Title title={t3("title-technologies-line")} />
      <div className="container-tools">
        <div className="container-tools-content">
          {TECHNOLOGHIES.map((tect) => (
            <div className="container-tools-text" key={tect.id}>
              {tect.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
