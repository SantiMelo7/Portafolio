import { Oswald } from 'next/font/google'
import './globals.css'

const inter = Oswald({ subsets: ['cyrillic'], weight: ["400"] })

export const metadata = {
  title: 'Portafolio | SantiDev',
  description: 'My website where I show all my projects and skills within the world of programming',
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["favicon/apple-touch-icon.png?v=4"],
    shortcut: ["favicon/apple-touch-icon.png"]
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-[#000] bg-gray-900 `}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}