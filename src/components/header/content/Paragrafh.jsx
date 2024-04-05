export default function Paragrafh() {
  const cssSpan = "text-yellow-200";

  const cssP = "xl:text-2xl md:text-xl sm:text-xl text-white";

  return (
    <>
      <strong className={cssP}>
        {" "}
        I am a Front-End Developer, &nbsp;{" "}
        <span className={cssSpan}>with 1 year of experience</span> in the world
        of web pages. This year he worked mostly with &nbsp;{" "}
        <span className={cssSpan}>
          {" "}
          React, Next JS, Talwind, as well as HTML, CSS and Javascript
        </span>
      </strong>

      <strong className={cssP}>
        When programming day by day, I look for new challenges that make me able
        to demonstrate my skills and have work experiences that make me learn
        new things
      </strong>
    </>
  );
}
