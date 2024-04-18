import { Axios, CssSvg, MaterialUi, MongoDB, Netifly, NextJs, Postman, ReactJs, ReactRouterDom, StyledComponents, Talwind, Vercel, Vite } from "../svg/IconsSvg";


export const PROJECTS = [
    {
        id: 1,
        title: "Entrepeneur Platform",
        img: "/content/entrepeneur-platform.webp",
        tools: {
            next: <NextJs width={20} />,
            react: <ReactJs width={20} />,
            axios: <Axios width={20} />,
            vercel: <Vercel width={20} />,
            styledComponents: <StyledComponents width={10} />
        },
        visitGit: "https://github.com/ActoSoft/entrepreneur-platform-ui",
        visitPrev: "https://entrepreneur-platform-mngulbl12-santicms-projects.vercel.app/"
    },
    {
        id: 2,
        title: "Ecommerce Tec",
        img: "/content/ecommerce.webp",
        tools: {
            next: <NextJs width={20} />,
            react: <ReactJs width={20} />,
            tailwind: <Talwind width={20} />,
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
        img: "/content/tesla.webp",
        tools: {
            react: <ReactJs width={20} />,
            tailwind: <Talwind width={20} />,
            vite: <Vite width={20} />,
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
        img: "/content/formula-calculator.webp",
        tools: {
            react: <ReactJs width={20} />,
            css: <CssSvg width={20} />,
            reactRouterDom: <ReactRouterDom width={20} />,
            vite: <Vite width={20} />,
            vercel: <Vercel width={20} />,
        },
        visitGit: "https://github.com/SantiMelo7/Calculator-Formula",
        visitPrev: "https://calculator-formula-math.vercel.app/"
    }
]