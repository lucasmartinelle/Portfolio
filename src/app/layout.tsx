import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'

const karla = Karla({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Lucas MARTINELLE - Portfolio',
  description: 'Bienvenu sur mon portfolio ! Vous y apprendrez plus sur moi, mon parcours et mes motivations...'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={karla.className + " bg-background min-h-screen"}>{children}</body>
    </html>
  )
}
