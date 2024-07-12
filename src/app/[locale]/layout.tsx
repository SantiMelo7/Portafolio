import { Oswald } from 'next/font/google'
import './globals.css'

const inter = Oswald({ subsets: ['cyrillic'], weight: ["200"] })

export const metadata = {
  title: 'Portafolio | SantiDev',
  description: 'My website where I show all my projects and skills within the world of programming',
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["favicon/apple-touch-icon.png?v=4"],
    shortcut: ["favicon/apple-touch-icon.png"]
  }
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} dark:bg-[#000] bg-gray-300 `}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}