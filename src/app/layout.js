import { Lato } from 'next/font/google'
import './globals.css'

const inter = Lato({ subsets: ['latin'], weight: ["100", "300", "400"] })

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
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}

// 'bg-gradient-to-l from-[#080808] to-[#1B1C1B]'
