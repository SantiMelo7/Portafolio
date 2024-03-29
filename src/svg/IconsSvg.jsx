import Image from "next/image";
import HtmlImg from "../../public/svg/Html.svg";
import CssImg from "../../public/svg/Css.svg";
import JavascriptImg from "../../public/svg/Javascript.svg";
import ReactImg from "../../public/svg/React.svg";
import NextImg from "../../public/svg/Next.svg";
import MaterialUiImg from "../../public/svg/MaterialUi.svg";
import GitImg from "../../public/svg/Git.svg";
import TalwindImg from "../../public/svg/Tailwind.png";
import GitHubImg from "../../public/svg/GitHub.svg";
import PostmanImg from "../../public/svg/Postman.svg";
import MongoImg from "../../public/svg/Mongo.svg";
import ViteImg from "../../public/svg/Vite.png";
import AxiosImg from "../../public/svg/axios.ico";
import StylesComponentsImg from "../../public/svg/styles-components.png";

export const CssH1 = "font-extrabold ";

export const GitHub = () => {
  return (
    <svg
      width="29"
      height="50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 250"
    >
      <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
    </svg>
  );
};

export const Linkedin = () => {
  return (
    <svg
      width="25"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
    >
      <path
        d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
        fill="currentColor"
      />
    </svg>
  );
};

export const HTML = ({ width }) => {
  return (
    <>
      <Image src={HtmlImg} width={width} alt="HTML" />

      <h1 className={CssH1}>Html</h1>
    </>
  );
};

export const CssSvg = ({ width }) => {
  return (
    <>
      <Image src={CssImg} width={width} alt="CSS" />

      <h1 className={CssH1}>Css</h1>
    </>
  );
};

export const Javascript = ({ width }) => {
  return (
    <>
      <Image src={JavascriptImg} width={width} alt="Javascript" />

      <h1 className={CssH1}>Javascript</h1>
    </>
  );
};

export const ReactJs = ({ width }) => {
  return (
    <>
      <Image src={ReactImg} width={width} alt="React Js" />
      <h1 className={CssH1}>React Js</h1>
    </>
  );
};

export const NextJs = ({ width }) => {
  return (
    <>
      <Image src={NextImg} width={width} alt="Next Js" />
      <h1 className={CssH1}>Next Js</h1>
    </>
  );
};

export const MongoDB = ({ width }) => {
  return (
    <>
      <Image src={MongoImg} width={width} alt="Mongo DB" />
      <h1 className={CssH1}>Mongo DB</h1>
    </>
  );
};

export const Postman = ({ width }) => {
  return (
    <>
      <Image src={PostmanImg} width={width} alt="Postman" />
      <h1 className={CssH1}>Postman</h1>
    </>
  );
};

export const GitHubSvg = ({ width }) => {
  return (
    <>
      <Image src={GitHubImg} width={width} alt="GitHub" />

      <h1 className={CssH1}>GitHub</h1>
    </>
  );
};

export const Git = ({ width }) => {
  return (
    <>
      <Image src={GitImg} width={width} alt="Git" />

      <h1 className={CssH1}>Git</h1>
    </>
  );
};

export const MaterialUi = ({ width }) => {
  return (
    <>
      <Image src={MaterialUiImg} width={width} alt="Material Ui" />

      <h1 className={CssH1}>Material Ui</h1>
    </>
  );
};

export const Talwind = ({ width }) => {
  return (
    <>
      <Image src={TalwindImg} width={width} alt="Tailwind" />

      <h1 className={CssH1}>Talwind</h1>
    </>
  );
};

export const Axios = ({ width }) => {
  return (
    <>
      <Image src={AxiosImg} width={width} alt="Axios" />

      <h1 className={CssH1}>Axios</h1>
    </>
  );
};

export const StyledComponents = ({ width }) => {
  return (
    <>
      <Image src={StylesComponentsImg} width={width} alt="Styled-Components" />

      <h1 className={CssH1}>Styled-Components</h1>
    </>
  );
};

export const Vite = ({ width }) => {
  return (
    <>
      <Image src={ViteImg} width={width} alt="Vite" />

      <h1 className={CssH1}>Vite</h1>
    </>
  );
};

export const LinkProject = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
      <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
    </svg>
  );
};
