import './globals.css'
import { Playfair_Display, Public_Sans } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public',
})

export const metadata = {
  title: 'Demo Roast Co.',
  description: 'Explore the world of artisanal coffee at Demo Roast Co.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
