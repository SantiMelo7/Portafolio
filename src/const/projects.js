import { Axios, MaterialUi, MongoDB, NextJs, Postman, ReactJs, StyledComponents, Talwind, Vercel } from "../svg/IconsSvg";

export const PROJECTS = [
    {
        id: 1,
        title: "Entrepeneur Platform",
        description: "Application for entrepreneurship, where you can show the world the potential of your invention and get people interested in it. Created with Next.Js, React and others",
        img: "/entrepeneur-platform.webp",
        tools: [
            { id: 1, next: <NextJs width={20} /> },
            { id: 2, react: <ReactJs width={20} /> },
            { id: 3, axios: <Axios width={20} /> },
            { id: 4, vercel: <Vercel width={20} /> },
            { id: 5, styledComponents: <StyledComponents width={20} /> }
        ],
        visitGit: "https://github.com/ActoSoft/entrepreneur-platform-ui",
        visitPrev: "https://entrepreneur-platform-mngulbl12-santicms-projects.vercel.app/"
    },
    {
        id: 2,
        title: "Ecommerce Tec",
        description: "Ecommerce application to be able to buy technology items, first website I made. Created with Next.JS, React, Tailwind and managing the MongoDB database",
        img: "/ecommerce.webp",
        tools: [
            { id: 6, next: <NextJs width={20} /> },
            { id: 7, react: <ReactJs width={20} /> },
            { id: 8, axios: <Axios width={20} /> },
            { id: 9, vercel: <Vercel width={20} /> },
            { id: 10, styledComponents: <StyledComponents width={20} /> }
        ],
        visitGit: "https://github.com/SantiMelo7/Ecommerce",
        visitPrev: "https://ecommerce-tec.netlify.app/"
    },
    {
        id: 3,
        title: "Tesla Clon | Home",
        description: "Tesla Clone Application, Created from scratch with Next.js and Tailwind CSS in order to demonstrate my skills",
        img: "/tesla.webp",
        tools: [
            { id: 11, react: <ReactJs width={20} /> },
            { id: 12, tailwind: <Talwind width={20} /> },
            { id: 13, vercel: <Vercel width={20} /> },
            { id: 14, materialUi: <MaterialUi width={20} /> }
        ],
        visitGit: "https://github.com/SantiMelo7/Tesla-Clon-Home",
        visitPrev: "https://tesla-clon-home-bie1f0e1t-santicms-projects.vercel.app/"
    }
]