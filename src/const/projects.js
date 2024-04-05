import { Axios, CssSvg, MaterialUi, MongoDB, Netifly, NextJs, Postman, ReactJs, ReactRouterDom, StyledComponents, Talwind, Vercel, Vite } from "../svg/IconsSvg";

export const PROJECTS = [
    {
        id: 1,
        title: "Entrepeneur Platform",
        description: "Application for entrepreneurship, where you can show the world the potential of your invention and get people interested in it. Created with Next.Js, React and others",
        img: "/entrepeneur-platform.webp",
        tools: {
            next: <NextJs width={20} />,
            react: <ReactJs width={20} />,
            axios: <Axios width={20} />,
            vercel: <Vercel width={20} />,
            styledComponents: <StyledComponents width={20} />
        },
        visitGit: "https://github.com/ActoSoft/entrepreneur-platform-ui",
        visitPrev: "https://entrepreneur-platform-mngulbl12-santicms-projects.vercel.app/"
    },
    {
        id: 2,
        title: "Ecommerce Tec",
        description: "Ecommerce application to be able to buy technology items, first website I made. Created with Next.JS, React, Tailwind and managing the MongoDB database",
        img: "/ecommerce.webp",
        tools: {
            next: <NextJs width={20} />,
            react: <ReactJs width={20} />,
            mongo: <MongoDB width={20} />,
            postman: <Postman width={20} />,
            netifly: <Netifly width={20} />,
        },
        visitGit: "https://github.com/SantiMelo7/Ecommerce",
        visitPrev: "https://ecommerce-tec.netlify.app/"
    },

    {
        id: 3,
        title: "Tesla Clon | Home",
        description: "Tesla Clone Application, Created from scratch with Next.js and Tailwind CSS in order to demonstrate my skills",
        img: "/tesla.webp",
        tools: {
            react: <ReactJs width={20} />,
            tailwind: <Talwind width={20} />,
            vercel: <Vercel width={20} />,
            materialUi: <MaterialUi width={20} />
        },
        visitGit: "https://github.com/SantiMelo7/Tesla-Clon-Home",
        visitPrev: "https://tesla-clon-home-bie1f0e1t-santicms-projects.vercel.app/"
    },

    {
        id: 4,
        title: "Formula Calculator",
        description: "Application created with React, a mini project that a client requested of me, to be able to calculate some physics and electricity/magnetism formulas",
        img: "/formula-calculator.webp",
        tools: {
            react: <ReactJs width={20} />,
            css: <CssSvg width={20} />,
            reactRouterDom: <ReactRouterDom width={20} />,
            vite: <Vite width={20} />,
            vercel: <Vercel width={20} />,
        },
        visitGit: "https://github.com/SantiMelo7/Calculator",
        visitPrev: "https://calculator-formula.vercel.app"
    }
]