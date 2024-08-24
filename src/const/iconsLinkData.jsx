import { BookText } from "lucide-react";
import { GitHub, Gmail, Linkedin } from "../svg/IconsSvg";


export const iconsLinkData = [
    {
        key: 1,
        url: "https://github.com/SantiMelo7",
        text: "GitHub",
        component: <GitHub/>
    },
    {
        key: 2,
        url: "https://www.linkedin.com/in/santiago-melo-7b25732a5/",
        text: "Linkedin",
        component: <Linkedin />
    },
    {
        key: 3,
        url: "mailto:santiagocano15cr7@gmail.com",
        text: "Contáctame",
        component: <Gmail />
    },
    {
        key: 4,
        url: "https://curriculum-dev.vercel.app/",
        text: "Ver CV",
        component: <BookText />
    },
]