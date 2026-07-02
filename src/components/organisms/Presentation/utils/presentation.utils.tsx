import { BookText } from 'lucide-react';
import { Email, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import CVSantiagoMelo from '@/assets/CV-SantiagoMelo.pdf';

export const resourcesMe = [
  {
    key: 1,
    url: 'https://github.com/SantiMelo7',
    text: 'GitHub',
    component: <GitHub />,
  },
  {
    key: 2,
    url: 'https://www.linkedin.com/in/santiago-melo-7b25732a5/',
    text: 'Linkedin',
    component: <LinkedIn />,
  },
  {
    key: 3,
    url: 'mailto:santiagocano15cr7@gmail.com',
    text: 'Email',
    component: <Email />,
  },
  {
    key: 4,
    url: CVSantiagoMelo,
    text: 'Ver CV',
    component: <BookText />,
  },
  {
    key: 5,
    url: 'https://wa.me/7721114272/',
    text: 'WhatsApp',
    component: <WhatsApp />,
  },
  {
    key: 6,
    url: 'https://discord.com/users/669010436825284638',
    text: 'Discord',
    component: <DiscordLogoIcon width={20} height={20} />,
  },
];

export const highlightedPhrasesByLanguage: Record<string, string[]> = {
  es: [
    'más de 3 años de experiencia',
    '2 años de experiencia profesional',
    'React, Next.js, JavaScript, Tailwind CSS y Firebase',
    'interfaces modernas, accesibles y de alto rendimiento',
    'metodologías ágiles',
    'código limpio y mantenible',
    'capacidad de adaptación, resolución de problemas, comunicación efectiva y trabajo en equipo',
  ],
  en: [
    'more than 3 years of experience',
    '2 years of professional experience',
    'React, Next.js, JavaScript, Tailwind CSS, and Firebase',
    'modern, accessible, and high-performance interfaces',
    'agile methodologies',
    'clean and maintainable code',
    'adaptability, problem-solving, effective communication, and teamwork',
  ],
};
