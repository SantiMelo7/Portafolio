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
        <div className="flex flex-col xl:ml-8 gap-4 mt-2 sm:p-1">
          <TitleInitial text={t6("name-autor")} className="text-5xl" />
          <Paragrafh />
          <IconsLink />
        </div>
      </div>
    </>
  );
}
