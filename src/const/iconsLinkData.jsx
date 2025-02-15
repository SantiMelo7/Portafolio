import { BookText } from "lucide-react";
import { GitHub, Gmail, Linkedin } from "../svg/IconsSvg";
import { WhatsApp } from '@mui/icons-material';
import { DiscordLogoIcon } from '@radix-ui/react-icons'

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
        text: "Email",
        component: <Gmail />
    },
    {
        key: 4,
        url: "https://drive.google.com/file/d/1QmbfRwmOBdnZ7RzyDJfwdkcsk67wwe1Z/view?usp=sharing",
        text: "Ver CV",
        component: <BookText />
    },
    {
        key: 5,
        url: "https://wa.me/7721114272/",
        text: "WhatsApp",
        component: <WhatsApp/>
    },
    {
        key: 6,
        url: "https://discord.com/users/669010436825284638",
        text: "Discord",
        component: <DiscordLogoIcon width={20} height={20}/>
    },
]