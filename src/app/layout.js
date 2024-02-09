import { Oswald } from 'next/font/google'
import './globals.css'

const inter = Oswald({ subsets: ['cyrillic'], weight: [ "400"] })

export const metadata = {
  title: 'Portafolio Website',
  description: 'My website where I show all my projects and skills within the world of programming',
  icons: {
    icon: ["/images/favicon.ico?v=4"],
    apple: ["images/apple-touch-icon.png?v=4"],
    shortcut: ["images/apple-touch-icon.png"]
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#000]">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}