/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ReactRouterDomImg from "../../public/svg/react-router-dom.webp";
import NextAuthImg from "../../public/svg/nextAuth.webp";
import NextIntlImg from "../../public/svg/next-intl.webp";
import FirebaseHostingImg from "../../public/svg/firebaseHosting.webp";
import UserImg from "../../public/svg/user.png";
import { ChevronsLeftRightEllipsis } from "lucide-react";

export const RedirectHome = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      className=" dark:fill-white fill-black"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export const Curriculum = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="29"
        height="29"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    </>
  );
};

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

export const Gmail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width="35"
      height="50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
};

export const UserMe = () => {
  return <Image src={UserImg.src} width={80} height={80} alt="User" />;
};

export const DarkTheme = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={35}
      height={35}
      className=" dark:fill-white fill-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
};

export const SumTheme = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={35}
      height={35}
      className="dark:fill-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
};

export const Language = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={35}
      height={35}
      className="dark:text-white text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
      />
    </svg>
  );
};

export const HTML = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=html"  width={width} alt="HTML" />
      <h1 className="title-tools">Html</h1>
    </>
  );
};

export const CssSvg = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=css"  width={width} alt="CSS" />
      <h1 className="title-tools">Css</h1>
    </>
  );
};

export const Javascript = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=javascript" width={width} alt="Javascript" />
      <h1 className="title-tools">Javascript</h1>
    </>
  );
};

export const Typescript = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=typescript"  width={width} alt="Typescript" />
      <h1 className="title-tools">Typescript</h1>
    </>
  );
};

export const ReactJs = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=react"  width={width} alt="React Js" />
      <h1 className="title-tools">React Js</h1>
    </>
  );
};

export const NextJs = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=next"
        width={width}
        alt="Next Js"
      />
      <h1 className="title-tools">Next Js</h1>
    </>
  );
};

export const MongoDB = ({ width }) => {
  return (
    <>
       <img src="https://skillicons.dev/icons?i=mongo"  width={width} alt="Mongo DB" />
      <h1 className="title-tools">Mongo DB</h1>
    </>
  );
};

export const Firebase = ({ width }) => {
  return (
    <>
       <img src="https://skillicons.dev/icons?i=firebase"  width={width} alt="Firebase" />
      <h1 className="title-tools">Firebase</h1>
    </>
  );
};

export const Postman = ({ width }) => {
  return (
    <>
       <img src="https://skillicons.dev/icons?i=postman"  width={width} alt="Postman" />
      <h1 className="title-tools">Postman</h1>
    </>
  );
};

export const GitHubSvg = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=github"
        width={width}
        alt="GitHub"
      />
      <h1 className="title-tools">GitHub</h1>
    </>
  );
};

export const Git = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=git"  width={width} alt="Git" />
      <h1 className="title-tools">Git</h1>
    </>
  );
};

export const MaterialUi = ({ width }) => {
  return (
    <>
       <img src="https://skillicons.dev/icons?i=materialui" width={width} alt="Material Ui" />
      <h1 className="title-tools">Material Ui</h1>
    </>
  );
};

export const Talwind = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=tailwind"  width={width} alt="Tailwind" />
      <h1 className="title-tools">Tailwind</h1>
    </>
  );
};

export const Saas = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=sass"  width={width} alt="Saas" />
      <h1 className="title-tools">Saas</h1>
    </>
  );
};

export const Axios = ({ width }) => {
  return (
    <>
      <div style={{ background: "white", borderRadius: 10, paddingTop: 2}}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" width={width} alt="Axios" />
      </div>
      <h1 className="title-tools">Axios</h1>
    </>
  );
};

export const StyledComponents = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=styledcomponents" width={width} alt="Styled-Components" />
      <h1 className="title-tools">Styled-Components</h1>
    </>
  );
};

export const Vite = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=vite"  width={width} alt="Vite" />
      <h1 className="title-tools">Vite</h1>
    </>
  );
};

export const Jira = ({ width }) => {
  return (
    <>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" width={width} alt="Jira Software" />
      <h1 className="title-tools">Jira Software</h1>
    </>
  );
};

export const Vercel = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=vercel"  width={width} alt="Vercel" />
      <h1 className="title-tools">Vercel</h1>
    </>
  );
};

export const Netifly = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=netlify"  width={width} alt="Netifly" />
      <h1 className="title-tools">Netifly</h1>
    </>
  );
};

export const ReactRouterDom = ({ width }) => {
  return (
    <>
      <Image className="dark:hidden flex" src={ReactRouterDomImg} width={width} alt="React-Router-Dom" />
      <h1 className="title-tools">React-Router-Dom</h1>
    </>
  );
};

export const NextAuth = ({ width }) => {
  return (
    <>
      <Image src={NextAuthImg} width={width} alt="NextAuth" />
      <h1 className="title-tools">NextAuth</h1>
    </>
  );
};

export const AntdDesign = ({ width }) => {
  return (
    <>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg" width={width} alt="Antd Design" />
      <h1 className="title-tools">Antd Design</h1>
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

export const VsCode = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=vscode"  width={width} alt="Visual Studio Code" />
      <h1 className="title-tools">Visual Studio Code</h1>
    </>
  );
};

export const Figma = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=figma"  width={width} alt="Figma" />
      <h1 className="title-tools">Figma</h1>
    </>
  );
};

export const Npm = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=npm" width={width} alt="NPM" />
      <h1 className="title-tools">Npm</h1>
    </>
  );
};

export const NextIntl = ({ width }) => {
  return (
    <>
      <Image src={NextIntlImg} width={width} alt="Next Intl" />
      <h1 className="title-tools">Next Intl</h1>
    </>
  );
};

export const FirebaseHosting = ({ width }) => {
  return (
    <>
      <Image src={FirebaseHostingImg} width={width} alt="FirebaseHosting" />
      <h1 className="title-tools">Hosting</h1>
    </>
  );
};

export const Prisma = ({ width }) => {
  return (
    <>
      <img src="https://skillicons.dev/icons?i=prisma" width={width} alt="Prisma" />
      <h1 className="title-tools">Prisma</h1>
    </>
  );
};