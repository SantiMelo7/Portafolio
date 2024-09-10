import Links from "./Links";
import {iconsLinkData} from "../../../const/iconsLinkData"

export default function IconsLink() {
  return (
    <nav className="flex flex-col justify-center gap-y-3 gap-x-10 mt-4">
      <div className="grid grid-cols-2 lg:p-0 p-3 gap-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3">
        {iconsLinkData.map((text) => (
          <div key={text.key}>
            <Links className={`max-w-full cv ${text.key > 3 ? "md:py-2 py-[10px]" : ""}`}  href={text.text === "Ver CV" ? "/es/curriculum" : text.url} text={text.text} >
              {text.component}
            </Links>
          </div>
        ))}
      </div>
    </nav>
  );
}
