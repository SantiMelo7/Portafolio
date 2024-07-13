import { useParragrafhTraductor } from "../../../hooks/useTraduccion";
import TitleInitial from "../../layout/TitleInitial";
import IconsLink from "../icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";

export default function SubText() {
  const { t6 } = useParragrafhTraductor();
  return (
    <>
      <div className="container-sub-text">
        <ImageHeader />
        <div className="ontainer-more-info">
          <TitleInitial text={t6("name-autor")} className="text-me-bigger" />
          <Paragrafh />
          <IconsLink />
        </div>
      </div>
    </>
  );
}
