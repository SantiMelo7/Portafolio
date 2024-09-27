import { useParragrafhTraductor } from "../../../hooks/useTraduccion";
import TitleInitial from "../../layout/TitleInitial";
import IconsLink from "../icons/IconsLink";
import ImageHeader from "./Image";
import Paragrafh from "./Paragrafh";

export default function SubText() {
  const { t6 } = useParragrafhTraductor();
  return (
    <>
      <div className="flex flex-row justify-center xl:text-start text-center xl:ml-20 max-w-[30rem] sm:max-w-[43rem] mx-auto">
        <div>
          <ImageHeader />
          <div>
            <TitleInitial
              text={t6("name-autor")}
              className="md:text-5xl text-[44px]"
            />
            <Paragrafh />
            <IconsLink />
          </div>
        </div>
      </div>
    </>
  );
}
