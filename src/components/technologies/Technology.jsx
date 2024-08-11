/* eslint-disable @next/next/no-img-element */
import { TECHNOLOGHIES } from "../../const/tec";

export default function Technology() {
  //const { t3 } = useLineTitle();
  return (
    <>
      <div className="container-tools">
        <div className="container-tools-content">
          {TECHNOLOGHIES.map((tect) => (
            <div className="container-tools-text" key={tect.id}>
              <img src={tect.url} width={60} alt={tect.text}/>
              <h1 className="title-tools">{tect.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
