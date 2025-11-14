
import { BookText, Linkedin } from "lucide-react";
import { Email, GitHub, WhatsApp } from '@mui/icons-material';
import { DiscordLogoIcon } from '@radix-ui/react-icons'


export const dataIconsLink = [
    {
        key: 1,
        url: "https://github.com/SantiMelo7",
        text: "GitHub",
        component: <GitHub />
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
        text: "Email",
        component: <Email />
    },
    {
        key: 4,
        url: "/CV-Santiago Melo.pdf",
        text: "Ver CV",
        component: <BookText />
    },
    {
        key: 5,
        url: "https://wa.me/7721114272/",
        text: "WhatsApp",
        component: <WhatsApp />
    },
    {
        key: 6,
        url: "https://discord.com/users/669010436825284638",
        text: "Discord",
        component: <DiscordLogoIcon width={20} height={20} />
    },
]