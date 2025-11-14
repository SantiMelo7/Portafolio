import { Oswald } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl';

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

  const messages = useMessages()

  return (
    <html lang={locale} className="dark">
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          <main>
            {children}
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}